import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonState.module.css'
import Separator from '@/components/ui/Separator'

export default function WebtoonState(props: { state: string }) {

  return (
    <div className={style.state}>
      <p>{props.state}</p>
      <Separator
        color='black'
        gutter={1}
      />
    </div>
  )
}
