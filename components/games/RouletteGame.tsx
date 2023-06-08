import React, { useEffect, useState } from 'react'
import style from './RouletteGame.module.css'
import Image from 'next/image'
import axios from 'axios';
import { useSession } from 'next-auth/react';

export default function RouletteGame() {
  const { data: session } = useSession();
  const roulette = "roulette";
  const [rouletteData, setRouletteData] = useState<boolean>(false);

  const prizeData = [
    {
      id: 1,
      brandName: "꽝",
      // prizeName: "상품1",
      prizeImgUrl: "/assets/images/boom/boom.png",
    },
    {
      id: 2,
      brandName: "브랜드2",
      // prizeName: "상품2",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 3,
      brandName: "꽝",
      // prizeName: "상품3",
      prizeImgUrl: "/assets/images/boom/boom.png",
    },
    {
      id: 4,
      brandName: "브랜드4",
      // prizeName: "상품4",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 5,
      brandName: "꽝",
      // prizeName: "상품1",
      prizeImgUrl: "/assets/images/boom/boom.png",
    },
    {
      id: 6,
      brandName: "당첨",
      // prizeName: "상품2",
      prizeImgUrl: "/assets/images/boom/boom.png",
    },
    {
      id: 7,
      brandName: "브랜드7",
      // prizeName: "상품3",
      prizeImgUrl: "/assets/images/icons/loading.gif",
    },
    {
      id: 8,
      brandName: "당첨",
      // prizeName: "상품4",
      prizeImgUrl: "/assets/images/boom/boom.png",
    },
  ];

  const [spinning, setSpinning] = useState<boolean>(false);
  const [prize, setPrize] = useState<number>(Math.floor(Math.random() * prizeData.length) + 1);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);
  const [getPrize, setGetPrize] = useState<boolean>(false);

  const handleClick: () => void = () => {
    setGetPrize(false);
    setPrizeNumber(prize);
    setTimeout(() => {
      setGetPrize(true);
      setPrize(Math.floor(Math.random() * prizeData.length) + 1);
    }, 4000);
    if (prize === 1 || prize === 3 || prize === 5) {
      setRouletteData(false)
    } else {
      setRouletteData(true)
    }
    axios.put(`https://blockpage.site/game-service/v1/games`, {
      type: "roulette",
      compensation: rouletteData,
      headers: {
        "Content-Type": "application/json",
        memberId: session?.email || "",
      }
    })
    console.log(rouletteData)
  };

  useEffect(() => {
    setRouletteData(false);
  }, []);

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