import React from 'react'

import style from '@/components/modals/RatingModal.module.css'

export default function ConfirmModal(props: {
  text1: string,
  text2: string,
  text3: string,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>, handle: () => void
}) {
  return (
    <div className={style.modalBox}>
      <div className={style.modal}>
        <div className={style.skinPurchaseModalBox}>
          {
            props.text1 &&
            props.text2 &&
            <p className={style.useBlock}><span>{props.text1}</span>{props.text2}</p>
          }
          {
            props.text3 &&
            <p className={style.useBlock}>{props.text3}</p>
          }
          <div className={style.confirmBox}>
            <button type='button' className={style.confirmBtn} onClick={props.handle}>확인</button>
            <button type='button' className={style.cancle} onClick={() => props.setShowModal(false)}>취소</button>
          </div>
        </div>
      </div>
    </div >
  )
}
