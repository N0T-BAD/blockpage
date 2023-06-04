import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import style from '@/components/layouts/episodelistfooter/EpisodeListFooter.module.css'

export default function EpisodeListFooter() {

  //컴포넌트에는 props로 webtoonId를 받아오지만,
  //컴포넌트를 사용하는 페이지에서는 router를 사용하여 webtoonId를 받아온다.

  const router = useRouter();
  const { webtoonId } = router.query;
  return (
    <footer className={style.AuthorFooterWrap}>
      <div className={style.footerBtn}>
        <Image
          src={'/assets/images/icons/plus.svg'}
          alt="footerBtnIcon"
          width={50}
          height={50}
          priority
          onClick={() => router.push(`/episodelist/${webtoonId}/episodeinfo`)}
        />
      </div>
    </footer>
  )
}
