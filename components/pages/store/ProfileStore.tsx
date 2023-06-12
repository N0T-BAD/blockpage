import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';

import style from '@/components/pages/store/ProfileStore.module.css'
import { mySkinData, skinDataType, userDataType } from '@/types/storeDataType';
import ProfileSkin from './ProfileSkin';
import SkinPurchaseModal from '@/components/modals/SkinPurchaseModal';
import Swal from 'sweetalert2';

export default function ProfileStore(props: { data: userDataType }) {

  const { data: session } = useSession();

  const router = useRouter();

  const [confirm, setConfirm] = useState<boolean>(false);
  const [myBlock, setMyBlock] = useState<number>(0);
  const [selectedSkinId, setSelectedSkinId] = useState<number>(0);
  const [selectedSkinName, setSeletedSkinName] = useState<string>('');
  const [selectedSkinImage, setSelectedSkinImage] = useState<string>('');
  const [blockQuantity, setBlockQuantity] = useState<number>(0);
  const [skinData, setSkinData] = useState<skinDataType[]>([]);
  const userData = props.data;

  const [mySkin, setMySkin] = useState<mySkinData[]>([]);

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
    axios.get(`https://blockpage.site/purchase-service/v1/products?type=profileSkin`)
      .then((res) => {
        console.log(res);
        setSkinData(res.data.data);
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

      axios.get('https://blockpage.site/purchase-service/v1/purchases?type=profileSkin', {
        headers: { memberId: session.email }
      })
        .then((res) => {
          console.log(res.data.data);
          setMySkin(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
    };
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
            {
              //
              session?.email ?
                <Image
                  src={userData.profileImage}
                  alt='유저 프로필 이미지'
                  width={80}
                  height={80}
                  priority
                />
                :
                <Image
                  src={'/assets/images/mypage/userImg.png'}
                  alt='게스트 프로필 이미지'
                  width={80}
                  height={80}
                  priority
                />
            }
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
                mySkin={mySkin}
                skinId={data.profileSkinId}
                selectedSkinId={selectedSkinId}
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
          <button type='button' className={style.confirm} onClick={!session ? () => router.push('/login') : () => setShowModal(true)}>구매</button>
        </div>
      </section>
    </>
  )
}
