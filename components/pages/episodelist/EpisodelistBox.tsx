import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import style from '@/components/pages/authorworkslist/AuthorSubCategory.module.css';
import { useRouter } from 'next/router';
import { AuthorEpisodeList, EpisodeDeleteData, EpisodeViewListType, WebToonListDataType, webtoonDeleteData } from '@/types/webtoonDataType';
import { useSession } from 'next-auth/react';
import axios from 'axios';

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
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisodeData();
  }, [webtoonId, session]);

  const handleDeleteClick = (episodeNumber: number) => {
    router.push(`/episodelist/${webtoonId}/episode/${episodeNumber}/episodedelete`);
  };

  const handleChangeClick = (episodeNumber: number) => {
    router.push(`/episodelist/${webtoonId}/episode/${episodeNumber}/changeepisode`);
  };

  console.log(webtoonData)

  return (
    <>
      {episodeData.data && webtoonData.data ? (
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
                    <p className={style.viewstxt}>{episodeData.uploadDate}</p>
                  </div>
                  <div className={style.likes}>
                    <p className={style.likestxt}>{episodeData.totalScore}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.webtoonButton}>
              <button onClick={() => handleChangeClick(episodeData.episodeNumber)}>수정</button>
              <button onClick={() => handleDeleteClick(episodeData.episodeNumber)}>삭제</button>
            </div>
          </div>
        )))
        :
        <></>
      }
    </>
  );
}