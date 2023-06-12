import React, { useState } from 'react'

import style from '@/components/modals/RatingModal.module.css'
import Swal from 'sweetalert2'
import ConfirmModal from './ConfirmModal';
import { useRouter } from 'next/router';

export default function SkinPurchaseModal(props: { myBlock: number, blockQuantity: number, skinName: string, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, handlePurchase: () => void }) {

  const router = useRouter();
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  const alertSwal = () => {
    Swal.fire({
      icon: 'warning',
      text: '블럭이 부족합니다.',
      showConfirmButton: false,
      timer: 2000
    }).then(result => {
      props.setShowModal(false);
      router.push('/blockcharge');
    })
  }

  const confirmModal = () => {
    props.setShowModal(false)
    setShowConfirmModal(true);
  }

  return (
    <>
      <div className={style.modalBox}>
        <div className={style.modal}>
          <div className={style.skinPurchaseModalBox}>
            <p className={style.myBlock}>내 블럭 : {props.myBlock}개</p>
            <p className={style.useBlock}>블럭 {props.blockQuantity}개를 사용하여</p>
            <p className={style.useBlock}><span>{props.skinName}</span></p>
            <p className={style.useBlock}>구매하시겠습니까?</p>
            <div className={style.confirmBox}>
              <button type='button' className={style.confirmBtn} onClick={props.myBlock >= props.blockQuantity ? props.handlePurchase : () => alertSwal()}>확인</button>
              <button type='button' className={style.cancle} onClick={() => props.setShowModal(false)}>취소</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
