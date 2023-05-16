import React, { useState } from 'react'
import style from '@/components/pages/authorworkslist/AuthorWorksList.module.css'
import Image from 'next/image';
import { authorWorksListCategoryData, authorWorksListData } from '@/data/authorWorksListData';
import AuthorCash from '@/components/pages/authorworkslist/AuthorCash';
import { useRouter } from 'next/router';
import { transactionHistoryData } from '@/types/authorWorksListDataType';

const AuthorWorksList = () => {

  const [active, setActive] = useState('');

  const handleCategoryClick = (name: string) => {
    setActive(name);
  }

  const handleEpisodeClick = (episodeId: number) => {
    router.push(`/episodelist?episodeid=${episodeId}`);
  }

  const router = useRouter();

  return (
    <>
      <div className={style.HistoryCategory}>
        <nav>
          <ul>
            {authorWorksListCategoryData.map((category) => (
              <li
                key={category.id}
                className={category.name === active ? `${style.active}` : ""}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {authorWorksListCategoryData.map((category) => (
        <div className={category.name === active ? `${style.Clickactive}` : `${style.NoClickactive}`}>
          <>
            {
              category.name === '웹툰 조회' ?
                <>
                  {authorWorksListData.map((webtoonsubcategory) => (
                    <>
                      <div className={style.webtoonBox}>
                        <div className={style.webtoonInfoWrap}>
                          <div className={style.ImgWrap}>
                            <Image src={'/assets/images/Best/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                          </div>
                          <div className={style.contentWrap}>
                            <div className={style.option}>
                              <div className={style.views}>
                                <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                                <p className={style.viewstxt}>{webtoonsubcategory.views}</p>
                              </div>
                              <div className={style.likes}>
                                <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                                <p className={style.likestxt}>{webtoonsubcategory.likes}</p>
                              </div>
                            </div>
                            <p className={style.title}>{webtoonsubcategory.title}</p>
                            <p className={style.author}>{webtoonsubcategory.author}</p>
                          </div>
                        </div>
                        <div className={style.webtoonButton}>
                          <button onClick={() => router.push('/changewebtoon')}>수정</button>
                          <button onClick={() => router.push('/webtoondelete')}>삭제</button>
                        </div>
                      </div>
                      <footer className={style.AuthorFooterWrap}>
                        <div className={style.footerBtn}>
                          <Image
                            src={'/assets/images/icons/plus.svg'}
                            alt="footerBtnIcon"
                            width={50}
                            height={50}
                            priority
                            onClick={() => router.push("/webtooninfo")}
                          />
                        </div>
                      </footer>
                    </>
                  ))}
                </>
                :
                category.name === '정산 & 통계' ?
                  <>
                    <AuthorCash />
                    {authorWorksListData.map((webtoonsubcategory) => (
                      <div className={style.webtoonBox}>
                        <div className={style.ImgWrap}>
                          <Image src={'/assets/images/Best/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                        </div>
                        <div className={style.contentWrap}>
                          <div className={style.option}>
                            <div className={style.views}>
                              <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                              <p className={style.viewstxt}>{webtoonsubcategory.views}</p>
                            </div>
                            <div className={style.likes}>
                              <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                              <p className={style.likestxt}>{webtoonsubcategory.likes}</p>
                            </div>
                          </div>
                          <p className={style.title}>{webtoonsubcategory.title}</p>
                          <p className={style.author}>{webtoonsubcategory.author}</p>
                        </div>
                      </div>
                    ))}
                  </>
                  : <></>
            }
          </>
        </div>
      ))}
    </>
  )
}

export default AuthorWorksList;