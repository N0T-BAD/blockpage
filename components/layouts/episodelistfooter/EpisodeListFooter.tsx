import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import style from '@/components/layouts/episodelistfooter/EpisodeListFooter.module.css'
import { WebToonListDataType } from '@/types/webtoonDataType';

export default function EpisodeListFooter() {
  const router = useRouter();
  return (
    <footer className={style.AuthorFooterWrap}>
      <div className={style.footerBtn}>
        <Image
          src={'/assets/images/icons/plus.svg'}
          alt="footerBtnIcon"
          width={50}
          height={50}
          priority
          onClick={() => router.push(`/episodeinfo`)}
        />
      </div>
    </footer>
  )
}
