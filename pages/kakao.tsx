import { useSession } from 'next-auth/react'
import React from 'react'

export default function Kakao() {

  const { data: stauts } = useSession()
  if (stauts) {
    console.log(stauts)
  }
  return (
    <div>
      test
    </div>
  )
}

Kakao.auth = true

