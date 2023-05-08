import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import style from '@/components/pages/episodeviewer/FooterViewer.module.css'
import BackBtn from '@/components/ui/BackBtn';

export default function FooterViewer() {

  const router = useRouter();

  return (
    <footer className={style.viewerFooterWrap}>
      <div className={style.backBtn}>
        <BackBtn />
      </div>
      <div className={style.commentBtn}>
        <Image
          src={'/assets/images/icons/comment.svg'}
          alt="commentBtnIcon"
          width={30}
          height={25}
          priority
          onClick={() => router.push("/comment")}
        />
      </div>
      <div className={style.listBtn}>
        <Image
          src={'/assets/images/icons/list.svg'}
          alt="listBtnIcon"
          width={25}
          height={22}
          priority
          onClick={() => router.push("/webtoonepisodelist")}
        />
      </div>
    </footer>
  )
}
