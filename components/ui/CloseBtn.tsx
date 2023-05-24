import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function CloseBtn(props: { width: number, height: number, onClick?: () => void }) {

  const router = useRouter();

  return (
    <div onClick={props.onClick}>
      <Image
        src={'/assets/images/icons/close.svg'}
        alt="closeBtnIcon"
        width={props.width}
        height={props.height}
        priority
      />
    </div>
  )
}
