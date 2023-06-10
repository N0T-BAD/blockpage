import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import style from '@/components/pages/authorworkslist/AuthorSubCategory.module.css';
import { useRouter } from 'next/router';
import { AuthorEpisodeList, EpisodeDeleteData, EpisodeViewListType, WebToonListDataType, webtoonDeleteData } from '@/types/webtoonDataType';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EpisodelistBox() {

  const router = useRouter();
  const { webtoonId } = router.query;
  const { data: session } = useSession();
  const [episodeData, setEpisodeData] = useState<AuthorEpisodeList>({
    data: [{
      episodeNumber: 0,
      episodeTitle: '',
      episodeThumbnail: '',
      uploadDate: '',
      totalScore: 0,
      webtoonStatus: '',
    }]
  });

  const [webtoonData, setWebtoonData] = useState<EpisodeDeleteData>({
    data: [{
      webtoonTitle: '',
      webtoonId: 0,
    }]
  })

  console.log(episodeData);

  useEffect(() => {

    const fetchEpisodeData = async () => {
      try {
        const response = await axios.get(
          `https://blockpage.site/webtoon-service/v1/episodes/creator?${webtoonId}`,
          {
            headers: {
              memberId: session?.email || '',
            },
            params: {
              webtoonId: webtoonId,
            },
          }
        );
        const episodeInfoData = response.data;
        console.log(episodeInfoData)
        setEpisodeData(episodeInfoData);
        console.log(episodeData);
        setWebtoonData(episodeInfoData);
        console.log(webtoonData)
        console.log(episodeData.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisodeData();
  }, [webtoonId, session]);

  const handleDeleteClick = (episodeNumber: number) => {

    const formData = new FormData();
    formData.append('webtoonId', String(webtoonId));
    formData.append('episodeNumber', String(episodeNumber));
    axios.post(`https://blockpage.site/webtoon-service/v1/demands?target=episode&type=remove`,
      formData,
      {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
      .then((res) => {
        console.log(res)
        Swal.fire({
          icon: 'success',
          title: '삭제되었습니다.',
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => {
            window.location.reload()
          })
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const handleChangeClick = (episodeNumber: number) => {
    router.push(`/episodelist/${webtoonId}/episode/${episodeNumber}/changeepisode`);
  };

  return (
    <>
      {episodeData.data && webtoonData.data && episodeData.data.length ? (
        webtoonData.data && episodeData.data.map((episodeData) => (
          <div className={style.webtoonBox} key={episodeData.episodeNumber}>
            <div className={style.webtoonInfoWrap}>
              <div className={style.ImgWrap}>
                <Image src={episodeData.episodeThumbnail} alt={episodeData.episodeThumbnail} width={140} height={120} />
              </div>
              <div className={style.contentWrap}>
                <p className={style.episodetitle}>{episodeData.episodeNumber}화 {episodeData.episodeTitle}</p>
                <div className={style.option}>
                  <div className={style.views}>
                    <Image src={'/assets/images/icons/star.svg'} alt={'평점'} width={10} height={10} />
                    <p className={style.viewstxt}>{episodeData.totalScore}</p>
                  </div>
                  <div className={style.likes}>
                    <p className={style.likestxt}>{episodeData.uploadDate}</p>
                  </div>
                </div>
                <p className={style.author}>{episodeData.webtoonStatus}</p>
              </div>
            </div>
            <div className={style.webtoonButton}>
              {episodeData.webtoonStatus === "배포중" ?
                <>
                  <button onClick={() => handleChangeClick(episodeData.episodeNumber)}>수정</button>
                  <button onClick={() => handleDeleteClick(episodeData.episodeNumber)}>삭제</button>
                </>
                : ""
              }
              {/* {episodeData.webtoonStatus === "수정 요청" ?
                ""
                :
                <button onClick={() => handleChangeClick(episodeData.episodeNumber)}>수정</button>
              }
              {
                episodeData.webtoonStatus === "삭제 요청" ?
                  ""
                  :
                  <button onClick={() => handleDeleteClick(episodeData.episodeNumber)}>삭제</button>
              } */}
            </div>
          </div>
        )))
        :
        (
          <div className={style.sorrybox}>
            <Image src={'/assets/images/icons/Sorry.gif'} alt={'Sorry'} width={100} height={100} />
            <p>작품이 없습니다.</p>
          </div>
        )
      }
    </>
  );
}