import DataFetchingLoader from '@/components/widgets/DataFetchingLoader'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

export default function Kakao() {

  const { data } = useSession()
  const [kakaoUser, setKakaoUser] = React.useState<any>(null)

  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch('https://kapi.kakao.com/v2/user/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${data?.accessToken}`,
        }
      })
      const kakaoData = await res.json()
      setKakaoUser(kakaoData)
    }

    getUserData()

  }, [data])

  if (!data) {
    return (
      <DataFetchingLoader text={'kakao login'} />
    )
  }

  return (
    <DataFetchingLoader text={'data get'} />
  )
}

