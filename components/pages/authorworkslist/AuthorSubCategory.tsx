import { useRouter } from 'next/router';
import React from 'react'
import { authorWorksListCategoryData } from '@/data/authorWorksListData';
import { webtoonListData } from '@/data/dummy/webtoonData';
import Image from 'next/image';
import WebtoonListFooter from '@/components/layouts/webtoonlistfooter/WebtoonListFooter';
import AuthorCash from './AuthorCash';
import style from '@/components/pages/authorworkslist/AuthorSubCategory.module.css';


export default function AuthorSubCategory({ active }: { active: string }) {

  const handleEpisodeClick = () => {
    router.push(`/episodelist`);
  }

  const router = useRouter()

  return (
    <>
      {
        authorWorksListCategoryData.map((category) => (
          <div className={category.name === active ? `${style.Clickactive}` : `${style.NoClickactive}`} key={category.id}>
            <>
              {
                category.name === '웹툰 조회' ?
                  <>
                    {webtoonListData.map((webtoonsubcategory) => (
                      <>
                        <div className={style.webtoonBox}>
                          <div className={style.webtoonInfoWrap} onClick={handleEpisodeClick}>
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
                        <WebtoonListFooter />
                      </>
                    ))}
                  </>
                  :
                  category.name === '정산 & 통계' ?
                    <>
                      <AuthorCash />
                      {webtoonListData.map((webtoonsubcategory) => (
                        <div className={style.webtoonBox} key={webtoonsubcategory.id}>
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
        ))
      }
    </>
  )
}
