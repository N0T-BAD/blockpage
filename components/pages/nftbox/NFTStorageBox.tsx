import React, { useEffect, useState } from 'react'
import style from '@/components/pages/nftbox/NFTStorageBox.module.css'
import Image from 'next/image'
import { nftListData } from '@/types/storeDataType'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function NFTStorageBox() {
  const { data: session } = useSession();

  const [nftList, setNftList] = useState<nftListData>({
    data: [
      {
        memberId: '',
        expiredDate: '',
        memberHasNftId: 0,
        nftDetail: {
          id: 0,
          nftName: '',
          nftDescription: '',
          nftImage: '',
          nftType: '',
        }
      }
    ]
  })

  useEffect(() => {
    axios.get('https://blockpage.site/purchase-service/v1/purchases?type=nft', {
      headers: {
        "content-type": "application/json",
        memberId: session?.email || "",
      }
    })
      .then((res) => {
        setNftList(res.data)
        console.log(nftList)
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section className={style.nftsection}>
      {nftList.data && nftList.data.map((nft) => (
        <>
          <div className={nft.nftDetail.nftType === "ONE_BLOCK_DISCOUNT_BY_AUTHOR" ? style.nftstoragebox : style.nftstoragebox2} key={nft.memberHasNftId}>
            <div className={nft.nftDetail.nftType === "ONE_BLOCK_DISCOUNT_BY_AUTHOR" ? style.nftline : style.nftline2}></div>
            <div className={nft.nftDetail.nftType === "ONE_BLOCK_DISCOUNT_BY_AUTHOR" ? style.nftContentBox : style.nftContentBox2}>
              <Image src={nft.nftDetail.nftImage} alt={nft.nftDetail.nftName} width={100} height={100} />
              <div className={style.nftContent}>
                <p className={style.nftTitle}>{nft.nftDetail.nftName}</p>
                {nft.nftDetail.nftDescription === null ?
                  ""
                  :
                  <p>{nft.nftDetail.nftDescription}</p>
                }
                <p>{nft.expiredDate} 까지</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </section>
  )
}
