import React, { useEffect, useState } from 'react'

import style from '@/components/modals/ReportModal.module.css'
import CloseBtn from '../ui/CloseBtn';
import Radio from '../ui/Radio';
import { staticReportData } from '@/data/staticMenuData';

export default function ReportModal(props: { handleShowReportModal: () => void, handleReport: () => void, setReportValue: React.Dispatch<React.SetStateAction<number>> }) {

  const reportData = staticReportData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setReportValue(Number(e.target.value));
  }

  const handleConfirm = () => {
    props.handleReport();
    props.handleShowReportModal();
  }

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className={style.modalBox}>
      <div className={style.modal}>
        <div className={style.closeBtn} onClick={props.handleShowReportModal}>
          <CloseBtn
            height={20}
            width={20}
          />
        </div>
        <div className={style.radioBox}>
          <div className={style.radioDiv}>
            {
              reportData &&
              reportData.map((data) => (
                <Radio
                  key={data.id}
                  value={data.id}
                  text={data.name}
                  defaultChecked={data.defaultChecked}
                  handleChange={handleChange}
                />
              ))
            }
          </div>
          <div className={style.confirmBox}>
            <button type='button' className={style.confirm} onClick={handleConfirm}>확인</button>
          </div>
        </div>
      </div>
    </div>
  )
}