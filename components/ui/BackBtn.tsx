import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function BackBtn() {

  const router = useRouter();

  return (
    <div>
      <Image
        src={'/assets/images/icons/back.svg'}
        alt="backBtnIcon"
        width={20}
        height={20}
        priority
        onClick={() => router.back()}
      />
    </div>
  )
}
