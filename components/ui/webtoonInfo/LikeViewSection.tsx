import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonInfo.module.css'
import ViewsUi from './ViewsUi'
import LikesUi from './LikesUi'

interface Iprops {
  views: number;
  viewWidth: number;
  viewHeight: number;
  likes: number;
  likeWidth: number;
  likeHeight: number;
}

export default function LikeViewSection(props: Iprops) {
  return (
    <div className={style.likeViewSection}>
      <ViewsUi
        width={props.viewWidth}
        height={props.viewHeight}
        views={props.views}
      />
      <LikesUi
        width={props.likeWidth}
        height={props.likeHeight}
        likes={props.likes}
      />
    </div>
  )
}
