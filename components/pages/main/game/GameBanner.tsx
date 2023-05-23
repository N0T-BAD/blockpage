import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import style from '@/components/pages/main/game/GameBanner.module.css'
import { gameEventData } from '@/data/dummy/mainGameEventData'
import { GameBannerType } from '@/types/gameBanerType'

export default function GameBanner(props: { data: GameBannerType[] }) {

  const [data, setData] = useState<GameBannerType>(props.data[0])
  const [count, setCount] = useState<number>(0)
  const [isActive, setActive] = useState<boolean>(false)

  useInterval(() => {
    setCount(count + 1)
    if (count === props.data.length - 1) {
      setCount(0)
    }
    setData(props.data[count])
  }, 3000)

  return (
    <div className={style.gamewrap}>
      <GameBannerItem data={data} isActive={isActive} />
    </div>
  )
}

const GameBannerItem = (props: { data: GameBannerType, isActive: boolean }) => {
  return (
    <div className={props.isActive ? `${style.gameBox} ${style[props.data.color]} ` : `${style.gameBox} ${style[props.data.color]}`}>
      <div className={style.gameText}>
        <p>{props.data.eventTitle}</p>
        <p>{props.data.text}</p>
      </div>
      <Image src={props.data.imgUrl} alt={props.data.eventTitle} width={190} height={170} priority />
    </div>
  )
}


const useInterval = (callback: any, delay: number) => {
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}