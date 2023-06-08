import React, { useState } from 'react'
import style from './RouletteGame.module.css'
import Image from 'next/image'

export default function RouletteGame() {

  const prizeData = [
    {
      id: 1,
      brandName: "브랜드1",
      prizeName: "상품1",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 2,
      brandName: "브랜드2",
      prizeName: "상품2",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 3,
      brandName: "브랜드3",
      prizeName: "상품3",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 4,
      brandName: "브랜드4",
      prizeName: "상품4",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 5,
      brandName: "브랜드5",
      prizeName: "상품1",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 6,
      brandName: "브랜드6",
      prizeName: "상품2",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 7,
      brandName: "브랜드7",
      prizeName: "상품3",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 8,
      brandName: "브랜드8",
      prizeName: "상품4",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
  ];

  const [spinning, setSpinning] = useState<boolean>(false);
  const [prize, setPrize] = useState<number>(Math.floor(Math.random() * prizeData.length) + 1);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);
  const [getPrize, setGetPrize] = useState<boolean>(false);

  const handleClick = () => {
    setSpinning(true);
    setGetPrize(false);
    setPrizeNumber(prize);
    setTimeout(() => {
      setSpinning(false);
      setGetPrize(true);
      setPrize(Math.floor(Math.random() * prizeData.length) + 1);
    }, 4000);
  };

  return (
    <div className={style.wrap}>
      <div className={style.contents}>
        <div className={style.rouletteOuter}>
          <div className={spinning ? `${style.roulette} ${style[`on${prize}`]}` : style.roulette}>
            {/* 값 영역 */}
            <div>
              {prizeData.map((item) => {    // data map
                return (
                  <div
                    style={{ transform: `rotate(${((item.id - 1) * 45) % 360}deg)` }}  // 아이템 배치 각도
                    className={style.item}
                    key={item.id}
                  >
                    <div>
                      <div>
                        <p className={style.brandName}>{item.brandName}</p>
                        <p className={style.prizeName}>{item.brandName}</p>
                      </div>
                      <div className={style.prizeImg}>
                        <Image
                          className={style.prizeImgUrl}
                          src={item.prizeImgUrl}
                          alt={item.prizeImgUrl}
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* 선 영역 */}
            <div>
              {[...Array(8)].map((n, index) => {
                return (
                  <div
                    className={style.line}
                    style={{
                      transform: `rotate(${(index + 1) * 45 - 22.5}deg)`,  // 선의 각도
                    }}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          {/* <FiIcon className={style.roulettePin} />   // 상단에 있는 룰렛 핀 아이콘 */}
          <div className={style.rouletteOuterBtn}>
            <button
              className={style.rouletteBtn}
              onClick={handleClick}
            >
              <p>도전</p>
            </button>
          </div>
        </div>
      </div>
      {
        getPrize &&
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>당첨 번호 : {prizeNumber}</p>
      }
    </div>
  )
}