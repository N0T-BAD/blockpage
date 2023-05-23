import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import style from '@/components/layouts/header/Header.module.css'
import MenuModal from '@/components/modals/menu/MenuModal'

export default function Header() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const handlemain = () => {
    router.push("/");
  }

  const handleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      {
        showModal &&
        <MenuModal
          handleModal={handleModal}
        />
      }
      <header className={style.blockMainHeader}>
        <div className={style.logo}>
          <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} onClick={handlemain} priority />
          <h1>BlockPage</h1>
        </div>
        <nav>
          <ul>
            <li onClick={handleModal}>
              <Image src={'/assets/images/icons/menuIcon.svg'} alt={'SideMenu'} width={30} height={30} priority />
            </li>
            <li onClick={() => router.push('/login')}>
              <Image src={'/assets/images/icons/userIcon.svg'} alt={'User'} width={30} height={30} priority />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}