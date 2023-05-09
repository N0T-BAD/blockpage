import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function CloseBtn() {

  const router = useRouter();

  return (
    <div>
      <Image
        src={'/assets/images/icons/close.svg'}
        alt="closeBtnIcon"
        width={20}
        height={20}
        priority
        onClick={() => router.back()}
      />
    </div>
  )
}
