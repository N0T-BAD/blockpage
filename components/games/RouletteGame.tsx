import { useEffect, useRef, useState } from "react";
import style from "@/components/games/RouletteGame.module.css";
import axios from "axios";
import { useSession } from "next-auth/react";
import { GameData } from "@/types/gameBanerType";
import Swal from "sweetalert2";

const RouletteGame = () => {
  const rolLength = 6;
  const [setNum, setSetNum] = useState<number>(0);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { data: session } = useSession();
  const [games, setGames] = useState<GameData>({
    data: {
      rouletteDayCount: 0,
    }
  });

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
        console.log(games.data.rouletteDayCount)
      })
      .catch((err) => {
        console.log(err)
      })
  }
    , [])

  // 랜덤숫자부여
  const rRandom = () => {
    const min = Math.ceil(0);
    const max = Math.floor(rolLength - 1);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const rRotate = () => {
    const panel = document.querySelector(`.${style.rouletterwacu}`) as HTMLElement;
    const btn = document.querySelector(`.${style.rouletterbtn}`) as HTMLButtonElement;
    const deg: number[] = [];
    // 룰렛 각도 설정(rolLength = 6)
    for (let i = 1, len = rolLength; i <= len; i++) {
      deg.push((360 / len) * i);
    }

    // 랜덤 생성된 숫자를 히든 인풋에 넣기
    let num = 0; // let으로 변경
    setSetNum(rRandom());

    // 애니설정
    const ani = setInterval(() => {
      num++;
      if (panel && panel.style) {
        panel.style.transform = "rotate(" + 360 * num + "deg)";
      }

      // btn.disabled와 btn.style.pointerEvents 설정을 다음과 같이 변경
      if (btn) {
        btn.disabled = true;
        btn.style.pointerEvents = "none";
      }

      // 총 50에 다달했을 때, 즉 마지막 바퀴를 돌고나서
      if (num === 50) {
        clearInterval(ani);
        if (panel && panel.style) {
          panel.style.transform = `rotate(${deg[setNum!]}deg)`;
        }
      }
    }, 50);
  };

  const rLayerPopup = (num: number) => {
    let isSuccess = false;
    if (num === 2 || num === 4 || num === 0) {
    } else if (num === 3 || num === 5 || num === 1) {
      isSuccess = true;
    }

    axios.put("https://blockpage.site/game-service/v1/games", {
      type: "roulette",
      compensation: isSuccess,
    },
      {
        headers: {
          "Content-Type": "application/json",
          memberId: session?.email || "",
        },
      })
      .then((res) => {
        console.log(res)
        setGames(prevGames => ({
          ...prevGames,
          data: {
            ...prevGames.data,
            rouletteDayCount: prevGames.data.rouletteDayCount - 1,
          },
        }));
        if (res.data.data.message === "축하합니다. 블럭이 지급되었습니다.") {
          Swal.fire({
            icon: "success",
            title: "당첨!! 블럭 2개 획득!!",
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
            showConfirmButton: false,
            timer: 1500,
          })
            .then(() => {
              window.location.reload();
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // reset
  const rReset = () => {
    setTimeout(() => {
      const btn = btnRef.current;
      if (btn) {
        btn.disabled = false;
        btn.style.pointerEvents = "auto";
      }
      rLayerPopup(setNum!);
    }, 5500);
  };


  return (
    <div id="app" className={style.boxWrap}>
      {/* <p className={style.gameTitle}>룰렛 게임</p> */}
      <div className={style.rouletter}>
        <div className={style.rouletterbg}>
          <div className={style.rouletterwacu}></div>
        </div>
        <div className={style.rouletterarrow}></div>
        {games.data.rouletteDayCount > 0 ?
          <button className={style.rouletterbtn} ref={btnRef} onClick={() => {
            rRotate();
            rReset();
          }}>
            start
          </button>
          :
          <button className={style.rouletterbtn2} disabled>
            start
          </button>
        }
      </div>
      <p className={style.gameTitle}>룰렛 횟수 : {games.data.rouletteDayCount}</p>
    </div>
  );
};

export default RouletteGame;
