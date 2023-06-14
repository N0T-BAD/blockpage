import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import axios from 'axios';

import style from '@/components/layouts/header/WebtoonHeader.module.css'

import BackBtn from '@/components/ui/BackBtn'
import LikeButton from '@/components/ui/LikeButton'
import { WebToonDataType } from '@/types/webtoonDataType';
import Swal from 'sweetalert2';

interface likeStateType {
  id: number;
  choice: boolean;
}

export default function WebtoonHeader() {
  const { data: session } = useSession();
  const router = useRouter();
  const { webtoonId } = router.query;
  const [webtoonData, setWebtoonData] = useState<WebToonDataType>();
  const [like, setLike] = useState<boolean>(false);
  const [likeState, setLikeState] = useState<likeStateType>();

  useEffect(() => {
    if (session) {
      axios.all([
        axios.get(`https://blockpage.site/webtoon-service/v1/episodes?webtoonId=${webtoonId}&sort=DESC`),
        axios.get(`https://blockpage.site/member-service/view/v1/interest`, {
          headers: { memberId: session.email },
          params: { webtoonId: webtoonId },
        })
      ])
        .then(
          axios.spread((res1, res2) => {
            setWebtoonData(res1.data.data);
            setLikeState(res2.data.data);
            setLike(res2.data.data.choice);
          })
        )
        .catch((err) => {
          console.log(err);
        })
    }
  }, [session?.email, like])

  const handleLike = () => {
    if (webtoonData && likeState) {
      if (like === false) {
        axios.post(`https://blockpage.site/member-service/v1/interests`, {
          webtoonId: webtoonId,
          webtoonTitle: webtoonData.webtoonTitle,
          webtoonThumbnail: webtoonData.webtoonThumbnail,
          genre: webtoonData.genre,
          illustrator: webtoonData.illustrator,
          creator: webtoonData.creator,
        }, {
          headers: {
            memberId: session?.email
          }
        })
          .then((res) => {
            setLike(true);
          })
          .catch((err) => {
            console.log(err);
          })
      } else if (like === true) {
        axios.delete(`https://blockpage.site/member-service/v1/interests/${likeState.id}`)
          .then((res) => {
            setLike(false);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    } else {
      Swal.fire({
        icon: 'warning',
        text: '로그인이 필요한 서비스입니다.',
        showConfirmButton: false,
        timer: 2000
      }).then(result => {
        router.push('/login');
      })
    }
  }

  return (
    <header className={style.webtoonHeader}>
      <div className={style.backBtn}>
        <BackBtn
          onClick={() => router.back()}
        />
      </div>
      <div className={style.likeBtn}>
        <LikeButton
          like={like}
          onClick={handleLike}
        />
      </div>
    </header>
  )
}
