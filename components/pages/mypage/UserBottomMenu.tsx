import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserBottomMenu.module.css'
import { UserBottomMenuData } from '@/types/userBottomMenuData'
import { userBottomMenuData } from '@/data/userBottomMenuData'
import Link from 'next/link'
import { authorRoleDataType } from '@/types/authorNameDataType'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Swal from 'sweetalert2'

export default function UserBottomMenu() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const [authorNickname, setAuthorNickname] = useState<authorRoleDataType>({
    data: {
      role: '',
    },
  });

  useEffect(() => {
    axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
      headers: {
        memberId: session?.email || '',
        // role: role,
      },
    })
      .then((res) => {
        setAuthorNickname(res.data);
        console.log(res.data)
        console.log(authorNickname)
      })
  }, [])

  const handleattendance = () => {
    axios.post('https://blockpage.site/member-service/v1/attendance', {}, {
      headers: {
        memberId: session?.email || '',
      },
    })
      .then((res) => {
        if (res) {
          Swal.fire({
            icon: 'success',
            title: '출석 완료!',
            text: res.data.message,
            showConfirmButton: false,
            timer: 2000
          })
            .then(() => {
              window.location.reload();
            })
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          Swal.fire({
            icon: 'error',
            title: '출석 실패!',
            text: err.response.data,
            confirmButtonText: '확인',
          })
        }
      })
  }

  return (
    <div className={style.UserBottomMenulist}>
      <div className={style.UserMenu} onClick={handleattendance}>
        <Image src={"/assets/images/icons/jewelry.svg"} alt={"출석 체크"} width={30} height={30} />
        <p>출석하기</p>
      </div>
      {userBottomMenuData.map((data: UserBottomMenuData) => (
        <div className={style.UserMenu} key={data.id}>
          <Link href={data.path}>
            <Image src={data.iconUrl} alt={data.name} width={30} height={30} />
            <p>{data.name}</p>
          </Link>
        </div>
      ))}
      {authorNickname.data.role === "AUTHOR" ?
        <div className={style.UserMenu}>
          <Link href={"/authorworkslist"}>
            <Image src={"/assets/images/icons/authorIcon.svg"} alt={"작품 관리"} width={30} height={30} />
            <p>작품 관리</p>
          </Link>
        </div>
        :
        <div className={style.UserMenu}>
          <Link href={"/authorregister"}>
            <Image src={"/assets/images/icons/UserPlus.svg"} alt={"작가 등록"} width={30} height={30} />
            <p>작가 등록</p>
          </Link>
        </div>
      }
    </div>
  )
}
