import React from 'react'

import HeartSvg from '@/public/assets/images/icons/heart.svg';
import FullHeartSvg from '@/public/assets/images/icons/fullheart.svg';

export default function LikeButton(props: { like: boolean, onClick: () => void }) {
  return (
    <>
      {
        props.like
          ? <FullHeartSvg width="25" height="25" onClick={props.onClick} />
          : <HeartSvg width="25" height="25" fill="var(--bp-red)" onClick={props.onClick} />
      }
    </>
  )
}
