import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import axios from 'axios';

import style from '@/components/pages/store/NftStore.module.css'
import { nftDataType, userDataType } from '@/types/storeDataType';
import SkinPurchaseModal from '@/components/modals/SkinPurchaseModal';
import Swal from 'sweetalert2';
import NftData from './NftData';
import { useRouter } from 'next/router';

export default function NftStore(props: { data: userDataType }) {

  const { data: session } = useSession();

  const router = useRouter();

  const [confirm, setConfirm] = useState<boolean>(false);

  const [myBlock, setMyBlock] = useState<number>(0);
  const [selectedNftId, setSelectedNftId] = useState<number>(0);
  const [selectedNftName, setSeletedNftName] = useState<string>('');
  const [selectedNftImage, setSelectedNftImage] = useState<string>('');
  const [blockQuantity, setBlockQuantity] = useState<number>(0);
  const [nftData, setNftData] = useState<nftDataType[]>([]);
  const userData = props.data;

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSelectNft = (nftId: number, nftName: string, nftImage: string, blockQuantity: number) => {
    setSelectedNftId(nftId);
    setSeletedNftName(nftName);
    setSelectedNftImage(nftImage);
    setBlockQuantity(blockQuantity);
  }

  const handlePurchase = () => {
    if (session) {
      axios.post(`https://blockpage.site/purchase-service/v1/purchases?type=profileSkin`, {
        nftId: selectedNftId,
        blockQuantity: blockQuantity,
        persistType: "rental",
      }, {
        headers: { memberId: session.email }
      })
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: selectedNftName,
            text: '구매가 완료되었습니다.',
            showConfirmButton: false,
            timer: 2000
          }).then(result => {
            setConfirm(!confirm);
            setShowModal(false);
          })
        })
        .catch((err) => {
          if (err.response.status === 409) {
            Swal.fire({
              icon: 'warning',
              title: selectedNftName,
              text: err.response.data,
              showConfirmButton: false,
              timer: 2000
            }).then(result => {
              setShowModal(false);
            })
          }
        })
    }
  }

  const handleLogin = () => {
    Swal.fire({
      icon: 'warning',
      text: '로그인이 필요한 서비스입니다.',
      showConfirmButton: false,
      timer: 2000
    }).then(result => {
      router.push('/login');
    })
  }

  useEffect(() => {
    axios.get(`https://blockpage.site/purchase-service/v1/products?type=nft`)
      .then((res) => {
        setNftData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (session) {
      axios.get(`https://blockpage.site/block-service/v1/blocks`, {
        headers: { memberId: session.email }
      })
        .then((res) => {
          setMyBlock(res.data.data.totalBlocks)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [session?.email, confirm])

  return (
    <>
      {
        showModal &&
        <SkinPurchaseModal
          myBlock={myBlock}
          blockQuantity={blockQuantity}
          skinName={selectedNftName}
          setShowModal={setShowModal}
          handlePurchase={handlePurchase}
        />
      }
      <section className={style.nftSection}>
        <div className={style.sectionTxt}>
          <p>NFT 목록</p>
          <p className={style.myBlock}>보유 블럭 {myBlock}</p>
        </div>
        <div className={style.skinImgList}>
          {
            nftData &&
            nftData.map((data) => (
              <NftData
                key={data.nftId}
                nftId={data.nftId}
                nftCreatorId={data.nftCreatorId}
                nftMemberId={data.nftMemberId}
                nftName={data.nftName}
                selectedNftName={selectedNftName}
                nftDescription={data.nftDescription}
                nftImage={data.nftImage}
                nftBlockPrice={data.nftBlockPrice}
                nftType={data.nftType}
                handleSelectNft={handleSelectNft}
              />
            ))
          }
        </div>
        <div className={style.confirmBox}>
          <button type='button' className={style.confirm} onClick={!session ? () => handleLogin() : () => setShowModal(true)}>구매</button>
        </div>
      </section>
    </>
  )
}
