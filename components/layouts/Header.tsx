import React from 'react'
import { staticMenuData } from '@/data/staticMenuData'
import { StaticMenuData } from '@/types/staticDataType'
import style from '@/components/layouts/Header.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import BlockChargeButton from '../pages/mypage/BlockChargeButton'

export default function Header() {
  const router = useRouter();

  const handlemain = () => {
    router.push("/");
  }

  const handleBack = () => {
    router.back();
  }

  const handlemypageBack = () => {
    router.push("/mypage");
  }


  return (
    router.pathname === '/' ||
      router.pathname === "/mypage" ||
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
      :
      router.pathname === "/search" ||
        router.pathname === "/searchresult" ?
        <header>
          <div className={style.searchlogo}>
            <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} onClick={handlemain} />
          </div>
        </header>
        :
        router.pathname === '/login' ?
          <header className={style.LoginHeader}>
            <div className={style.LoginBack}>
              <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handleBack} />
            </div>
          </header>
          :
          router.pathname === '/blockcharge' ?
            <header className={style.BlockChargeHeader}>
              <div className={style.BlockChargeTxt}>
                <div className={style.BlockChargeBack}>
                  <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handleBack} />
                </div>
                <div className={style.BlockChargeLogo}>
                  <p>블럭 충전</p>
                </div>
              </div>
            </header>
            :
            router.pathname === '/blockpurchase' ?
              <header className={style.BlockChargeHeader}>
                <div className={style.BlockChargeTxt}>
                  <div className={style.BlockChargeBack}>
                    <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handlemypageBack} />
                  </div>
                  <div className={style.BlockUseLogo}>
                    <p>블럭 이용 내역</p>
                  </div>
                  <BlockChargeButton />
                </div>
              </header>
              :
              router.pathname === '/authorregister' ?
                <header className={style.BlockChargeHeader}>
                  <div className={style.BlockChargeTxt}>
                    <div className={style.BlockChargeBack}>
                      <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handlemypageBack} />
                    </div>
                    <div className={style.BlockChargeLogo}>
                      <p>작가 등록</p>
                    </div>
                  </div>
                </header>
                :
                router.pathname === '/authorworkslist' ?
                  <header className={style.BlockChargeHeader}>
                    <div className={style.BlockChargeTxt}>
                      <div className={style.BlockChargeBack}>
                        <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handlemypageBack} />
                      </div>
                      <div className={style.BlockChargeLogo}>
                        <p>작품 관리</p>
                      </div>
                    </div>
                  </header>
                  :
                  router.pathname === '/webtooninfo' ?
                    <header className={style.BlockChargeHeader}>
                      <div className={style.BlockChargeTxt}>
                        <div className={style.BlockChargeBack}>
                          <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handleBack} />
                        </div>
                        <div className={style.BlockChargeLogo}>
                          <p>웹툰 등록</p>
                        </div>
                      </div>
                    </header>
                    :
                    router.pathname === '/webtoondelete' ?
                      <header className={style.BlockChargeHeader}>
                        <div className={style.BlockChargeTxt}>
                          <div className={style.BlockChargeBack}>
                            <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handleBack} />
                          </div>
                          <div className={style.BlockChargeLogo}>
                            <p>웹툰 삭제</p>
                          </div>
                        </div>
                      </header>
                      :
                      router.pathname === '/episodelist' ?
                        <header className={style.BlockChargeHeader}>
                          <div className={style.BlockChargeTxt}>
                            <div className={style.BlockChargeBack}>
                              <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handleBack} />
                            </div>
                            <div className={style.EpisodeLogo}>
                              <p>에피소드 조회</p>
                            </div>
                          </div>
                        </header>
                        :
                        router.pathname === '/episodedelete' ?
                          <header className={style.BlockChargeHeader}>
                            <div className={style.BlockChargeTxt}>
                              <div className={style.BlockChargeBack}>
                                <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handleBack} />
                              </div>
                              <div className={style.EpisodeLogo}>
                                <p>에피소드 삭제</p>
                              </div>
                            </div>
                          </header>
                          :
                          router.pathname === '/episodeinfo' ?
                            <header className={style.BlockChargeHeader}>
                              <div className={style.BlockChargeTxt}>
                                <div className={style.BlockChargeBack}>
                                  <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handleBack} />
                                </div>
                                <div className={style.EpisodeLogo}>
                                  <p>에피소드 등록</p>
                                </div>
                              </div>
                            </header>
                            :
                            router.pathname === '/changeepisode' ?
                              <header className={style.BlockChargeHeader}>
                                <div className={style.BlockChargeTxt}>
                                  <div className={style.BlockChargeBack}>
                                    <Image src={"/assets/images/icons/back.svg"} alt={"뒤로가기"} width={20} height={20} onClick={handleBack} />
                                  </div>
                                  <div className={style.EpisodeLogo}>
                                    <p>에피소드 수정</p>
                                  </div>
                                </div>
                              </header>
                              :
                              <></>
  )
}