import React from 'react'
import { staticMenuData } from '@/data/staticMenuData'
import { StaticMenuData } from '@/types/staticDataType'
import style from '@/components/layouts/Header.module.css'
import Image from 'next/image'

export default function Header() {

  return (
    <header className={style.blockHeader}>
      <div className={style.logo}>
        <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} />
        <h1>BlockPage</h1>
      </div>
      <nav>
        <ul>
          {staticMenuData.map((menu:StaticMenuData) => (
            <li key={menu.id}>
              {
                menu.innerMenu ? 
                  <ul className={style.innerMenu}>
                    {menu.innerMenu.map((innerMenu:StaticMenuData) => (
                      <li key={innerMenu.id}>
                        <Image src={innerMenu.iconUrl} alt={innerMenu.name} width={30} height={30} />
                      </li>
                    ))}
                  </ul>
                :
                <Image src={menu.iconUrl} alt={menu.name} width={30} height={30} />
              }
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
