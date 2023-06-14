import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import axios from 'axios'

import style from '@/components/ui/WebtoonList.module.css'
import { listviewDataType } from '@/types/listviewDataType'
import Separator from './Separator'
import ViewLike from './ViewLike'
import LikeButton from './LikeButton'

interface likeStateType {
  id: number;
  choice: boolean;
}

export default function WebtoonList(props: { data: listviewDataType }) {
  const { data: session } = useSession();

  const router = useRouter();
  const webtoonId = props.data.webtoonId;
  const { archiveName } = router.query;

  const [like, setLike] = useState<boolean>(false);
  const [likeState, setLikeState] = useState<likeStateType>();

  const handleLike = () => {
    if (likeState && session) {
      if (like === true) {
        axios.delete(`https://blockpage.site/member-service/v1/interests/${likeState.id}`)
          .then((res) => {
            setLike(false);
            router.push('/webtoonarchive/favorite');
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }

  useEffect(() => {
    if (archiveName && session) {
      axios.get(`https://blockpage.site/member-service/view/v1/interest`, {
        headers: { memberId: session.email },
        params: { webtoonId: webtoonId },
      },)
        .then((res) => {
          setLikeState(res.data.data);
          setLike(res.data.data.choice);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

  return (
    <div>
      <div className={style.webtoonBox} >
        <div className={style.ImgWrap} onClick={() => router.push(`/webtoon/${webtoonId}`)}>
          <Image src={props.data.webtoonThumbnail} alt={props.data.webtoonTitle} width={100} height={90} priority />
        </div>
        <div className={style.contentWrap} onClick={() => router.push(`/webtoon/${webtoonId}`)}>
          {
            props.data.views || props.data.views === 0 ?
              <ViewLike
                data={props.data}
              /> : ""
          }
          <p className={style.title} >{props.data.webtoonTitle}</p>
          <p className={style.creator} >{props.data.creator} / {props.data.illustrator}</p>
          <div className={style.genre}>
            {
              props.data.publicationDays &&
              <p>{props.data.publicationDays}</p>
            }
            <p>{props.data.genre}</p>
          </div>
          {
            props.data.episodeTitle &&
            <p className={style.infoTxt}>{props.data.episodeTitle}</p>
          }
          {
            props.data.uploadDate &&
            <p className={style.infoTxt}>{props.data.uploadDate}</p>
          }
          {
            props.data.episodeNumber &&
            <p className={style.infoTxt}>{props.data.episodeNumber}화</p>
          }
        </div>
        {
          archiveName === 'favorite' ?
            <div className={style.heartBtnWrap}>
              <div className={style.heartBtn}>
                <LikeButton
                  like={like}
                  onClick={handleLike}
                />
              </div>
            </div> : ""
        }
      </div>
      <Separator color='var(--bp-line-gray)' gutter={0.5} />
    </div>
  )
}
