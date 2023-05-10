import React, { useState } from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonState.module.css'
import Separator from '@/components/ui/Separator'
import { WebtoonStateDataType } from '@/types/webtoonDataType';
import { webtoonStateData } from '@/data/dummy/webtoonData';

export default function WebtoonState() {

  const stateData = useState<WebtoonStateDataType>(webtoonStateData);

  return (
    <div className={style.state}>
      <p>{stateData[0].state}</p>
      <Separator
        color='black'
        gutter={1}
      />
    </div>
  )
}
