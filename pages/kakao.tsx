import DataFetchingLoader from '@/components/widgets/DataFetchingLoader'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

export default function Kakao() {

  const { data } = useSession()
  const [ kakaoUser, setKakaoUser ] = React.useState<any>(null)
  console.log(data)
  console.log(data?.id)

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

  // useEffect(() => {
  //   if(!kakaoUser) return
  //     const postUser = async () => {
  //       const res2 = await fetch('https://10.10.10.27:8082/v1/members', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           email: kakaoUser.kakao_account.email,
  //           nickname: kakaoUser.kakao_account.profile.nickname,
  //           profileImage: kakaoUser.kakao_account.profile.profile_image_url,
  //           gender: kakaoUser.kakao_account.gender,
  //         })
  //       })

  //       console.log(res2)
  //     }
  //     postUser()
    
      
  // }, [kakaoUser])

  if(!data) {
    return (
      <DataFetchingLoader text={'kakao login'}/>
    )
  }

  return (
    <DataFetchingLoader text={'data get'}/>
  )
}

