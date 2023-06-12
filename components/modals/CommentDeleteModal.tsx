import React from 'react'

import style from '@/components/modals/RatingModal.module.css'
import CloseBtn from '../ui/CloseBtn'

export default function CommentDeleteModal(props: { setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>, handleDelete: () => void }) {
  return (
    <div className={style.modalBox}>
      <div className={style.modal}>
        <div className={style.skinPurchaseModalBox}>
          <p className={style.useBlock}><span>댓글</span>을</p>
          <p className={style.useBlock}>삭제하시겠습니까?</p>
          <div className={style.confirmBox}>
            <button type='button' className={style.confirmBtn} onClick={props.handleDelete}>확인</button>
            <button type='button' className={style.cancle} onClick={() => props.setShowDeleteModal(false)}>취소</button>
          </div>
        </div>
      </div>
    </div >
  )
}
