import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import axios from 'axios';

import style from '@/components/pages/store/ProfileStore.module.css'
import { skinDataType, userDataType } from '@/types/storeDataType';
import ProfileSkin from './ProfileSkin';
import SkinPurchaseModal from '@/components/modals/SkinPurchaseModal';
import Swal from 'sweetalert2';

export default function ProfileStore(props: { data: userDataType }) {

  const { data: session } = useSession();

  const [confirm, setConfirm] = useState<boolean>(false);

  const [myBlock, setMyBlock] = useState<number>(0);
  const [selectedSkinId, setSelectedSkinId] = useState<number>(0);
  const [selectedSkinName, setSeletedSkinName] = useState<string>('');
  const [selectedSkinImage, setSelectedSkinImage] = useState<string>('');
  const [blockQuantity, setBlockQuantity] = useState<number>(0);
  const [skinData, setSkinData] = useState<skinDataType[]>([]);
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
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: selectedSkinName,
            text: '구매가 완료되었습니다.',
            showConfirmButton: false,
            timer: 3000
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
    if (session) {
      axios.all([
        axios.get(`https://blockpage.site/purchase-service/v1/products?type=profileSkin`),
        axios.get(`https://blockpage.site/block-service/v1/blocks`, {
          headers: { memberId: session.email }
        }),
      ])
        .then(
          axios.spread((res1, res2) => {
            console.log(res1);
            setSkinData(res1.data.data);

            console.log(res2);
            setMyBlock(res2.data.data.totalBlocks)
          })
        )
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
      <section className={style.userImgSection}>
        <div className={style.sectionProfileTxt}>
          <p>내 프로필</p>
          <p className={style.myBlock}>보유 블럭 {myBlock}</p>
        </div>
        <div className={style.userProfileDiv}>
          <div className={style.userProfileImgDiv}>
            <Image
              src={userData.profileImage}
              alt='유저 프로필 이미지'
              width={80}
              height={80}
              priority
            />
          </div>
          <div className={style.selectedUserSkin}>
            {
              selectedSkinImage !== '' &&
              <Image
                src={selectedSkinImage}
                alt='스킨 이미지'
                width={80}
                height={80}
                priority
              />
            }
          </div>
        </div>
      </section>
      <section className={style.profileSkinSection}>
        <div className={style.sectionTxt}>
          <p>스킨 목록</p>
        </div>
        <div className={style.skinImgList}>
          {
            skinData &&
            skinData.map((data) => (
              <ProfileSkin
                key={data.profileSkinId}
                skinId={data.profileSkinId}
                skinName={data.profileSkinName}
                skinDescription={data.profileSkinDescription}
                skinImage={data.profileSkinImage}
                blockPrice={data.profileSkinBlockPrice}
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
