import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { authorWorksListCategoryData } from '@/data/authorWorksListData';
import { webtoonListData } from '@/data/dummy/webtoonData';
import Image from 'next/image';
import WebtoonListFooter from '@/components/layouts/webtoonlistfooter/WebtoonListFooter';
import AuthorCash from './AuthorCash';
import style from '@/components/pages/authorworkslist/AuthorSubCategory.module.css';
import { authorwebtoonData } from '@/types/authorWorksListDataType';
import { useRecoilState } from 'recoil';
import { webtoonlist } from '@/state/webtoon/webtoonlist';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { WebToonListDataType } from '@/types/webtoonDataType';


export default function AuthorSubCategory({ active }: { active: string }) {
  const { data: session } = useSession()

  const [webtoonList, setWebtoonList] = useRecoilState<authorwebtoonData>(webtoonlist);

  console.log(webtoonList)


  useEffect(() => {
    axios.get("https://blockpage.site/webtoon-service/v1/webtoons/creator",
      {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
      .then((res) => {
        setWebtoonList(res.data)
        console.log(res.data.data.genreType)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleEpisodeClick = (webtoonId: number) => {
    router.push(`/episodelist/${webtoonId}`);
  };

  const getGenreTypeString = (genreType: number) => {
    if (genreType === 0) {
      return "판타지 드라마"
    } else if (genreType === 1) {
      return "로맨스"
    } else if (genreType === 2) {
      return "판타지"
    } else if (genreType === 3) {
      return "로맨스 판타지"
    } else if (genreType === 4) {
      return "액션"
    } else if (genreType === 5) {
      return "드라마"
    } else if (genreType === 6) {
      return "공포"
    } else if (genreType === 7) {
      return "코믹"
    }
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
                    {webtoonList.data.map((webtoonsubcategory) => (
                      <>
                        <div className={style.webtoonBox} key={webtoonsubcategory.webtoonId}>
                          <div className={style.webtoonInfoWrap} onClick={() => handleEpisodeClick(webtoonsubcategory.webtoonId)}>
                            <div className={style.ImgWrap}>
                              <Image src={webtoonsubcategory.webtoonThumbnail} alt={webtoonsubcategory.webtoonTitle} width={140} height={120} />
                            </div>
                            <div className={style.contentWrap}>
                              <div className={style.option}>
                                <div className={style.views}>
                                  <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                                  <p className={style.viewstxt}>{webtoonsubcategory.views}</p>
                                </div>
                                <div className={style.likes}>
                                  <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                                  <p className={style.likestxt}>{webtoonsubcategory.interestCount}</p>
                                </div>
                              </div>
                              <p className={style.title}>{webtoonsubcategory.webtoonTitle}</p>
                              <p className={style.author}>{webtoonsubcategory.creator}, {webtoonsubcategory.illustrator}</p>
                              <p className={style.author}>{getGenreTypeString(webtoonsubcategory.genreType)}</p>
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
