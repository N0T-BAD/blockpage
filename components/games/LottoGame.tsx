import React, { useEffect, useRef, useState } from 'react'
import style from '@/components/games/LottoGame.module.css'
import Image from 'next/image'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { GameLottoData } from '@/types/gameBanerType';
import Swal from 'sweetalert2';

function LottoGame() {
  const [userNumber, setUserNumber] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 5) + 1);
  const [result, setResult] = useState<boolean>(false);
  const [games, setGames] = useState<GameLottoData>({
    data: {
      lottoDayCount: 0,
    }
  });
  const btnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();
  const [image, setImage] = useState<boolean>(false);

  useEffect(() => {
    axios.get('https://blockpage.site/game-service/v1/games', {
      headers: {
        "Content-Type": "application/json",
        memberId: session?.email || "",
      }
    })
      .then((res) => {
        console.log(res)
        setGames(res.data)
        console.log(games)
      })
      .catch((err) => {
        console.log(err)
      })
  }
    , [])

  const checkResult = async () => {
    if (Number(userNumber) > 5 || Number(userNumber) === 0) {
      Swal.fire({
        icon: "error",
        title: "1~5 사이의 숫자를 입력해주세요.",
        showConfirmButton: false,
        timer: 1500,
      })
      return;
    }
    const btn = btnRef.current;
    const on = inputRef.current;
    if (btn && on) {
      on.disabled = true;
      on.style.pointerEvents = "none";
      btn.disabled = true;
      btn.style.pointerEvents = "none";
      setImage(true)
      setResult(false);
    }

    setTimeout(async () => {
      setImage(false)
      const isMatch = Number(userNumber) === randomNumber;
      setResult(isMatch ? true : false);
      try {
        const res = await axios.put(
          'https://blockpage.site/game-service/v1/games', {
          type: 'lotto',
          compensation: isMatch,
        },
          {
            headers: {
              "Content-Type": "application/json",
              memberId: session?.email || "",
            },
          })
        setGames((prevGames) => ({
          ...prevGames,
          data: {
            ...prevGames.data,
            rouletteDayCount: prevGames.data.lottoDayCount - 1,
          },
        }));
        if (res.data.data.message === "축하합니다. 블럭이 지급되었습니다.") {
          Swal.fire({
            icon: "success",
            title: "당첨!! 블럭 2개 획득!!",
            text: `당첨 번호 : ${randomNumber}`,
            showConfirmButton: false,
            timer: 1500,
          })
            .then(() => {
              window.location.reload();
            });
        } else {
          Swal.fire({
            icon: "error",
            title: "꽝! 다음기회에",
            text: `당첨 번호 : ${randomNumber}`,
            showConfirmButton: false,
            timer: 1500,
          })
            .then(() => {
              window.location.reload();
            });
        }
      } catch (error) {
        console.log(error);
      }
    }, 3000);
  }

  return (
    <>
      <section className={style.gameSection}>
        {image === false ? (
          <div className={style.lottoImg}>
            <Image src={"/assets/images/lotto/gashaponImg.png"} alt={"lotto"} width={110} height={190} />
          </div>
        ) : (
          <div className={style.lottoImg2}>
            <Image src={"/assets/images/lotto/gashapon.gif"} alt={"lotto"} width={110} height={190} />
          </div>)
        }
        <div className={style.lottoContent}>
          <p className={style.contentTitle}>뽑기 돌리고 블럭 받아 가자~~!!</p>
          <div className={style.inputBox}>
            {games.data.lottoDayCount > 0 ?
              <>
                <input
                  type="number"
                  value={userNumber}
                  onChange={(e) => setUserNumber(e.target.value)}
                  ref={inputRef}
                  placeholder='숫자 1~5 입력'
                />
                <button onClick={checkResult} ref={btnRef}>눌러봐!!</button>
              </>
              :
              <>
                <input
                  type="number"
                  value={userNumber}
                  onChange={(e) => setUserNumber(e.target.value)}
                  disabled
                />
                <button disabled>눌러봐!!</button>
              </>
            }
          </div>
          <p className={style.gamecount}>로또 횟수 : {games.data.lottoDayCount}</p>
        </div>
      </section>
    </>
  );
}

export default LottoGame;