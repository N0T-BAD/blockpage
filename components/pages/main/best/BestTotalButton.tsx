import React from 'react'
import style from '@/components/pages/main/best/BestTotalButton.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function BestTotalButton() {

  const router = useRouter();

  const onClick = () => {
    router.push(`/category/week/0`)
  }

  return (
    <div className={style.BestTotalButtonBox}>
      <div className={style.BestTotalButton} onClick={onClick}>
        <Image src="/assets/images/icons/circle.svg" alt={"TotalButton"} width={20} height={20} priority />
        <p>전체보기</p>
      </div>
    </div>
  )
}
