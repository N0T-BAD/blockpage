import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import axios from 'axios';

import style from '@/components/pages/store/NftStore.module.css'
import { nftDataType, skinDataType, userDataType } from '@/types/storeDataType';
import ProfileSkin from './ProfileSkin';
import SkinPurchaseModal from '@/components/modals/SkinPurchaseModal';
import Swal from 'sweetalert2';
import NftData from './NftData';

export default function NftStore(props: { data: userDataType }) {

  const { data: session } = useSession();

  const [confirm, setConfirm] = useState<boolean>(false);

  const [myBlock, setMyBlock] = useState<number>(0);
  const [selectedSkinId, setSelectedSkinId] = useState<number>(0);
  const [selectedSkinName, setSeletedSkinName] = useState<string>('');
  const [selectedSkinImage, setSelectedSkinImage] = useState<string>('');
  const [blockQuantity, setBlockQuantity] = useState<number>(0);
  const [nftData, setNftData] = useState<nftDataType[]>([]);
  const userData = props.data;

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSelectSkin = (skinId: number, skinName: string, skinImage: string, blockQuantity: number) => {
    setSelectedSkinId(skinId);
    setSeletedSkinName(skinName);
    setSelectedSkinImage(skinImage);
    setBlockQuantity(blockQuantity);
  }

  const handlePurchase = () => {
    if (session) {
      axios.post(`https://blockpage.site/purchase-service/v1/purchases?type=profileSkin`, {
        profileSkinId: selectedSkinId,
        blockQuantity: blockQuantity,
        persistType: "permanent",
      }, {
        headers: { memberId: session.email }
      })
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: selectedSkinName,
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
              title: selectedSkinName,
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

  useEffect(() => {
    axios.get(`https://blockpage.site/purchase-service/v1/products?type=nft`)
      .then((res) => {
        console.log(res);
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
          console.log(res);
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
          skinName={selectedSkinName}
          setShowModal={setShowModal}
          handlePurchase={handlePurchase}
        />
      }
      <section className={style.nftSection}>
        <div className={style.sectionTxt}>
          <p>NFT 목록</p>
        </div>
        <div className={style.skinImgList}>
          {
            nftData &&
            nftData.map((data) => (
              <NftData
                key={data.nftId}
                nftCreatorId={data.nftCreatorId}
                nftMemberId={data.nftMemberId}
                nftName={data.nftName}
                nftDescription={data.nftDescription}
                nftImage={data.nftImage}
                nftBlockPrice={data.nftBlockPrice}
                nftType={data.nftType}
                handleSelectSkin={handleSelectSkin}
              />
            ))
          }
        </div>
        <div className={style.confirmBox}>
          <button type='button' className={style.confirm} onClick={() => setShowModal(true)}>구매</button>
        </div>
      </section>
    </>
  )
}
