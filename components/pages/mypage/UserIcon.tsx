import React, { useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserIcon.module.css'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { authorRoleDataType } from '@/types/authorNameDataType';

export default function UserIcon() {

  const [Role, setRole] = useState<authorRoleDataType>({
    data: {
      role: '',
    },
  })

  const { data: session } = useSession()

  useEffect(() => {
    axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
      headers: {
        memberId: session?.email || '',
        // role: role,
      },
    })
      .then((res) => {
        const role = res.data.data.role;
        setRole({
          data: {
            role,
          },
        });
      })
  }, [])

  return (
    <>
      {
        Role.data.role === 'AUTHOR' ? (
          <div className={style.author} >
            <p>작가</p>
          </div>
        )
          : (
            <div className={style.reader} >
              <p>독자</p>
            </div>
          )
      }
    </>
  )
}
