import React, { useEffect, useState } from 'react'
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
    setImage(true)
    setResult(false);

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
      <h1>숫자 1부터 5까지 입력해주세요.</h1>
      {/* <p>Random Number: {randomNumber}</p> */}
      <input
        type="number"
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <button onClick={checkResult}>Check</button>
      <p className={style.gameTitle}>로또 횟수 : {games.data.lottoDayCount}</p>
    </section>
  );
}

export default LottoGame;