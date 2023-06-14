import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
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
import { WebtoonStatusData } from '@/types/authorWebtoonInfoImgDataType';
import Swal from 'sweetalert2';


export default function AuthorSubCategory({ active, defaultActive }: { active: string, defaultActive: string }) {
  const { data: session } = useSession()

  const [webtoonList, setWebtoonList] = useState<authorwebtoonData>({
    data: [{
      webtoonId: 0,
      webtoonTitle: '',
      webtoonThumbnail: '',
      creator: '',
      illustrator: '',
      views: 0,
      interestCount: 0,
      genre: 0,
      webtoonStatus: '',
    }]
  });

  const [WebtoonStatus, setWebtoonStatus] = useState<WebtoonStatusData>({
    data: {
      webtoonStatus: '',
    }
  });

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
        setWebtoonStatus(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleEpisodeClick = (webtoonId: number) => {
    router.push(`/episodelist/${webtoonId}`);
  };

  const handlechangewebtoonClick = (webtoonId: number) => {
    router.push(`/authorworkslist/${webtoonId}/changewebtoon`);
  };

  const handleDeleteWebtoonClick = (webtoonTitle: string, WebtoonStatus: string) => {

    const formData = new FormData();
    formData.append('webtoonTitle', webtoonTitle);
    formData.append('webtoonStatus', WebtoonStatus);
    axios.post(`https://blockpage.site/webtoon-service/v1/demands?target=webtoon&type=remove`,
      formData,
      {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: '삭제되었습니다.',
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => {
            window.location.reload();
          })
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const getGenreTypeString = (genre: number) => {
    if (genre === 0) {
      return "판타지 드라마"
    } else if (genre === 1) {
      return "로맨스"
    } else if (genre === 2) {
      return "판타지"
    } else if (genre === 3) {
      return "로맨스 판타지"
    } else if (genre === 4) {
      return "액션"
    } else if (genre === 5) {
      return "드라마"
    } else if (genre === 6) {
      return "공포"
    } else if (genre === 7) {
      return "코믹"
    }
  }

  const router = useRouter()

  return (
    <>
      {
        authorWorksListCategoryData.map((category) => (
          <div className={category.name === (active || defaultActive) ? `${style.Clickactive}` : `${style.NoClickactive}`} key={category.id}>
            <>
              {
                category.name === '웹툰 조회' ?
                  <>
                    {webtoonList.data.length ? (
                      <>
                        {webtoonList.data.map((webtoonsubcategory) => (
                          <>
                            <div className={style.webtoonBox} key={webtoonsubcategory.webtoonId}>
                              <div className={style.webtoonInfoWrap} onClick={() => handleEpisodeClick(webtoonsubcategory.webtoonId)}>
                                <div className={style.ImgWrap}>
                                  <Image src={webtoonsubcategory.webtoonThumbnail} alt={webtoonsubcategory.webtoonTitle} width={140} height={120} />
                                </div>
                                <div className={style.contentWrap}>
                                  <p className={style.genreoption}>{getGenreTypeString(webtoonsubcategory.genre)}</p>
                                  <p className={style.title}>{webtoonsubcategory.webtoonTitle}</p>
                                  <p className={style.author}>{webtoonsubcategory.creator} / {webtoonsubcategory.illustrator}</p>
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
                                  <p className={style.author}>{webtoonsubcategory.webtoonStatus}</p>
                                </div>
                              </div>
                              <div className={style.webtoonButton}>
                                {webtoonsubcategory.webtoonStatus === "배포중" ?
                                  <>
                                    <button onClick={() => handlechangewebtoonClick(webtoonsubcategory.webtoonId)}>수정</button>
                                    <button onClick={() => handleDeleteWebtoonClick(webtoonsubcategory.webtoonTitle, webtoonsubcategory.webtoonStatus)}>삭제</button>
                                  </>
                                  :
                                  ""
                                }
                              </div>
                            </div>
                          </>
                        ))}
                      </>
                    ) : (
                      <div className={style.sorrybox}>
                        <Image src={'/assets/images/icons/Sorry.gif'} alt={'Sorry'} width={100} height={100} />
                        <p>작품이 없습니다.</p>
                      </div>
                    )}
                    <WebtoonListFooter />
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
