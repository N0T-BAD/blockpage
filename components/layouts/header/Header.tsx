import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import axios from 'axios'

import style from '@/components/layouts/header/Header.module.css'
import MenuModal from '@/components/modals/menu/MenuModal'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function Header() {
  const { push } = useRouter();
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  const [userProfileImg, setUserProfileImg] = useState<string>('');
  const [userNickname, setUserNickname] = useState<string>('');
  const [userProfileSkin, setUserProfileSkin] = useState<string>('');

  const handleModal = () => {
    setShowModal(!showModal);
  }

  useEffect(() => {
    if (session) {
      axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
        headers: {
          memberId: session.email,
        },
      })
        .then((res) => {
          setUserProfileImg(res.data.data.profileImage);
          setUserNickname(res.data.data.nickname);
          setUserProfileSkin(res.data.data.profileSkin);
        })
    }
  }, [session?.email]);

  return (
    <>
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        width='80%'
        from='left'
        isOpen={showModal}
        hideHeader={true}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <>
          <MenuModal
            userProfileImg={userProfileImg}
            userNickname={userNickname}
            userProfileSkin={userProfileSkin}
            handleModal={handleModal}
          />
        </>
      </SlidingPane>
      <header className={style.blockMainHeader}>
        <div className={style.logo}>
          <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} onClick={() => push("/")} priority />
          <h1>BlockPage</h1>
        </div>
        <nav>
          <ul>
            <li onClick={handleModal}>
              <Image src={'/assets/images/icons/menuIcon.svg'} alt={'SideMenu'} width={30} height={30} priority />
            </li>
            <li onClick={() => push('/mypage')}>
              <Image src={'/assets/images/icons/userIcon.svg'} alt={'User'} width={30} height={30} priority />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}