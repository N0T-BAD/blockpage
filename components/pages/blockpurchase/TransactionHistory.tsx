import React, { useEffect, useState } from 'react'
import style from '@/components/pages/blockpurchase/TransactionHistory.module.css'
import { TransactionHistoryData } from '@/data/transactionHistoryData'
import { BlockPurchase, RefundBlock, UseBlock } from '@/types/chargeBlockData';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
import Image from 'next/image';
import Pagination from '@/components/ui/pagebutton/Pagination';

const TransectionHistory = () => {

  const { data: session } = useSession()
  const [active, setActive] = useState('');
  const [defaultActive] = useState("충전 내역");
  const [chargeBlock, setChargeBlock] = useState<BlockPurchase>(
    {
      data: [{
        orderId: '',
        blockQuantity: 0,
        paymentTime: '',
        blockGainType: '',
        validState: true,
      }],
    }
  )
  const [useBlock, setUseBlock] = useState<UseBlock>(
    {
      data: [{
        totalAmount: 0,
        orderId: '',
        blockQuantity: 0,
        paymentTime: '',
        blockLossType: '',
        episodeBMDetail: '',
      }],
    }
  )

  const [refund, setRefund] = useState<RefundBlock>(
    {
      data: [{
        orderId: '',
        validState: true,
      }]
    }
  )

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  chargeBlock.data.sort((a, b) => { return b.paymentTime.localeCompare(a.paymentTime) })
  useBlock.data.sort((a, b) => { return b.paymentTime.localeCompare(a.paymentTime) })

  useEffect(() => {
    axios.get("https://blockpage.site/block-service/v1/payments?type=gain", {
      headers: {
        'Content-Type': 'application/json',
        memberId: session?.email,
        // role: role,
      },
    })
      .then((res) => {
        setChargeBlock(res.data)
        console.log(chargeBlock)
        setRefund(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleCategoryClick = (name: string) => {
    setActive(name);
    if (name === '충전 내역') {
      axios.get("https://blockpage.site/block-service/v1/payments?type=gain", {
        headers: {
          'Content-Type': 'application/json',
          memberId: session?.email,
          // role: role,
        },
      })
        .then((res) => {
          console.log(res)
          setChargeBlock(res.data)
          console.log(chargeBlock)
          setRefund(res.data)
          console.log(refund)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      setPage(1);
    } else if (name === '사용 내역') {
      axios.get("https://blockpage.site/block-service/v1/payments?type=loss", {
        headers: {
          'Content-Type': 'application/json',
          memberId: session?.email,
          // role: role,
        },
      })
        .then((res) => {
          setUseBlock(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      setPage(1);
    }
  }

  const handlerefund = (index: number) => {
    Swal.fire({
      title: '정말 환불 하시겠습니까?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `네`,
      denyButtonText: `아니오`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("https://blockpage.site/block-service/v1/payments?type=kakao-refund", {
          orderId: refund.data[index].orderId,
        }, {
          headers: {
            'Content-Type': 'application/json',
            memberId: session?.email,
            // role: role,
          }
        })
          .then((res) => {
            console.log(res)
            if (res.status === 204) {
              Swal.fire({
                icon: 'success',
                title: '환불이 완료되었습니다.',
                showConfirmButton: false,
                timer: 3000
              })
                .then(() => {
                  window.location.reload();
                })
            }
          })
      } else if (result.isDenied) {
        Swal.fire('환불이 취소되었습니다.', '', 'info')
      }
    })
  }

  return (
    <>
      <div className={style.HistoryCategory}>
        <nav>
          <ul>
            {TransactionHistoryData.map((category) => (
              <li
                key={category.id}
                className={category.name === (active || defaultActive) ? `${style.active}` : ""}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {TransactionHistoryData.map((category) => (
        <div className={category.name === (active || defaultActive) ? `${style.Clickactive}` : `${style.NoClickactive}`} key={category.id}>
          {
            category.name === '충전 내역' ?
              <>
                {chargeBlock.data.length ?
                  (chargeBlock.data.slice(offset, offset + limit).map((chargeItem, index) => (
                    <div className={style.chargeBox} key={index}>
                      <div className={style.subhistorybox}>
                        <p className={style.chargedays}>{chargeItem.paymentTime}</p>
                        <div className={style.chargeBlockBox}>
                          <p>블럭 개수</p>
                          <p className={style.chargeBoxContent}>{chargeItem.blockQuantity} 개</p>
                        </div>
                        <div className={style.chargeBlockBox}>
                          <p>충전 타입</p>
                          <p className={style.chargeBoxContent}>{chargeItem.blockGainType}</p>
                        </div>
                      </div>
                      {chargeItem.blockGainType === "블럭 충전" ? (
                        <>
                          {refund.data[index].validState === true ?
                            <div className={style.refundBox}>
                              <button onClick={() => handlerefund(index)}>환불하기</button>
                            </div>
                            :
                            <div className={style.refund}>
                              <button>환불완료</button>
                            </div>
                          }
                        </>
                      )
                        : ""
                      }
                    </div>
                  )))
                  : (
                    <div className={style.sorrybox}>
                      <Image src={'/assets/images/icons/Sorry.gif'} alt={'Sorry'} width={100} height={100} />
                      <p>충전 내역이 없습니다.</p>
                    </div>
                  )}
                <footer className={style.paginationfotter}>
                  <Pagination
                    total={chargeBlock.data.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                  />
                </footer>
              </>
              :
              category.name === '사용 내역' ?
                <>
                  {useBlock.data.length ? (useBlock.data.slice(offset, offset + limit).map((useItem, index) => (
                    <div className={style.UseBox} key={index}>
                      <p className={style.chargedays}>{useItem.paymentTime}</p>
                      <div className={style.chargeBlockBox}>
                        <p>사용 블럭</p>
                        <p className={style.chargeBoxContent}>{useItem.blockQuantity}개</p>
                      </div>
                      {useItem.totalAmount === undefined ?
                        ""
                        :
                        <div className={style.chargeBlockBox}>
                          <p>가격</p>
                          <p className={style.chargeBoxContent}>{useItem.totalAmount}원</p>
                        </div>
                      }
                      <div className={style.chargeBlockBox}>
                        <p>블럭 사용 내역</p>
                        <p className={style.chargeBoxContent}>{useItem.blockLossType}</p>
                      </div>
                      {useItem.episodeBMDetail === undefined ? (
                        ""
                      ) : (
                        <div className={style.chargeBlockBox}>
                          <p>에피소드 제목</p>
                          <p className={style.chargeBoxContent}>{useItem.episodeBMDetail}</p>
                        </div>
                      )
                      }
                    </div>
                  )))
                    :
                    <div className={style.sorrybox}>
                      <Image src={'/assets/images/icons/Sorry.gif'} alt={'Sorry'} width={100} height={100} />
                      <p>사용 내역이 없습니다.</p>
                    </div>
                  }
                  <footer className={style.paginationfotter}>
                    <Pagination
                      total={useBlock.data.length}
                      limit={limit}
                      page={page}
                      setPage={setPage}
                    />
                  </footer>
                </>
                : ""
          }
        </div>
      ))}
    </>
  )
}

export default TransectionHistory;