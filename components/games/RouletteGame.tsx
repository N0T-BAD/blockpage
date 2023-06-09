import { useRef, useState } from "react";
import style from "@/components/games/RouletteGame.module.css";

const RouletteGame = () => {
  const rolLength = 6;
  const [setNum, setSetNum] = useState<number | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

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
    // const hiddenInput = document.createElement("input");
    // hiddenInput.className = "hidden-input";
    // document.body.append(hiddenInput);
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

  // 정해진 alert띄우기, custom modal등
  const rLayerPopup = (num: number) => {
    if (num === 1) {
      alert("당첨!! 블럭 2개 획득!!");
    } else if (num === 3) {
      alert("당첨!! 블럭 2개 획득!!");
    } else if (num === 5) {
      alert("당첨!! 블럭 2개 획득!!");
    } else {
      alert("꽝! 다음기회에");
    }
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
      // const hiddenInput = document.querySelector(".hidden-input") as HTMLElement;
      // hiddenInput.remove();
    }, 5500);
  };


  return (
    <div id="app" className={style.boxWrap}>
      <p className={style.gameTitle}>룰렛 게임</p>
      <div className={style.rouletter}>
        <div className={style.rouletterbg}>
          <div className={style.rouletterwacu}></div>
        </div>
        <div className={style.rouletterarrow}></div>
        <button className={style.rouletterbtn} ref={btnRef} onClick={() => {
          rRotate();
          rReset();
        }}>
          start
        </button>
      </div>
    </div>
  );
};

export default RouletteGame;