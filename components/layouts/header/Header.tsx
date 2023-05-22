import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import style from '@/components/layouts/header/Header.module.css'
import { staticMenuData } from '@/data/staticMenuData'
import { StaticMenuData } from '@/types/staticDataType'

export default function Header() {
  const router = useRouter();

  const handlemain = () => {
    router.push("/");
  }

  return (
    router.pathname === '/' ||
      router.pathname === "/best" ||
      router.pathname === "/week" ||
      router.pathname === "/genre" ?
      (
        <header className={router.pathname === '/' ? style.blockMainHeader : style.blockHeader}>
          <div className={style.logo}>
            <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} onClick={handlemain} />
            <h1>BlockPage</h1>
          </div>
          <nav>
            <ul>
              {staticMenuData.map((menu: StaticMenuData) => (
                <li key={menu.id}>
                  {
                    menu.innerMenu ?
                      <ul className={style.innerMenu}>
                        {menu.innerMenu.map((innerMenu: StaticMenuData) => (
                          <li key={innerMenu.id}>
                            <Link href={innerMenu.path}>
                              <Image src={innerMenu.iconUrl} alt={innerMenu.name} width={30} height={30} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                      :
                      <Link href={menu.path}>
                        <Image src={menu.iconUrl} alt={menu.name} width={30} height={30} />
                      </Link>
                  }
                </li>
              ))}
            </ul>
          </nav>
        </header>
      )
      : <></>
  )
}