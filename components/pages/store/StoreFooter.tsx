import React from 'react'
import { useSession } from 'next-auth/react'

import style from '@/components/pages/store/ProfileStore.module.css'
import Swal from 'sweetalert2';

export default function StoreFooter(props: { selectedProductName: string, handleLogin: () => void, setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {

  const { data: session } = useSession();

  const handleConfirmSelected = () => {
    Swal.fire({
      icon: 'warning',
      text: '구매할 스킨을 선택해주세요.',
      showConfirmButton: false,
      timer: 2000
    })
  }

  return (
    <section>
      <div className={style.confirmBox}>
        <button type='button'
          className={style.confirm}
          onClick={
            !session ?
              () => props.handleLogin()
              :
              !props.selectedProductName ?
                () => handleConfirmSelected()
                :
                () => props.setShowModal(true)
          }
        >구매</button>
      </div>
    </section>
  )
}
