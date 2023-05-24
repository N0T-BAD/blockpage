import React, { useState } from 'react'
import { useRouter } from 'next/router';

import style from '@/components/layouts/header/WebtoonHeader.module.css'

import BackBtn from '@/components/ui/BackBtn'
import LikeButton from '@/components/ui/LikeButton'

export default function WebtoonHeader() {

  const [like, setLike] = useState(false);
  const { back } = useRouter();

  const handleLike = () => {
    //api 호출 db 갱신
    setLike(!like);
  }

  return (
    <header className={style.webtoonHeader}>
      <div className={style.backBtn}>
        <BackBtn
          onClick={() => back()}
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
