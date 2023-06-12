import React from 'react'

import style from '@/components/modals/RatingModal.module.css'
import CloseBtn from '../ui/CloseBtn'

export default function SkinPurchaseModal(props: { myBlock: number, blockQuantity: number, skinName: string, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, handlePurchase: () => void }) {
  return (
    <div className={style.modalBox}>
      <div className={style.modal}>
        <div className={style.skinPurchaseModalBox}>
          <p className={style.myBlock}>내 블럭 : {props.myBlock}개</p>
          <p className={style.useBlock}>블럭 {props.blockQuantity}개를 사용하여</p>
          <p className={style.useBlock}><span>{props.skinName}</span></p>
          <p className={style.useBlock}>구매하시겠습니까?</p>
          <div className={style.confirmBox}>
            <button type='button' className={style.confirmBtn} onClick={props.handlePurchase}>확인</button>
            <button type='button' className={style.cancle} onClick={() => props.setShowModal(false)}>취소</button>
          </div>
        </div>
      </div>
    </div >
  )
}
