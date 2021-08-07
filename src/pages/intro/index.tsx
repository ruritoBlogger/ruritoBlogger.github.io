import styles from "./index.module.sass";
import { useEffect, useRef } from "react";
import { MutableRefObject } from "react";

import { CreateShakeAndUpAnimation } from "../../animations/CreateShakeAndUpAnimation";

const Intro: React.FC = () => {
  const id = "navigator";
  let boxesRef: MutableRefObject<null>[] = [];

  // FIXME: anyで握りつぶしちゃ＾〜う
  const parentRef: any = useRef(null);

  for (let i = 0; i < 5; i++) {
    boxesRef.push(useRef(null));
  }

  const getRandomValue = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  // FIXME: null回避のやり方が微妙よな
  const hiddenNavigator = () => {
    if (200 < window.scrollY) {
      document.getElementById(id)!.style.visibility = "hidden";
    } else {
      document.getElementById(id)!.style.visibility = "visible";
    }
  };

  /**
   * 背景のアイコンを描画する
   * 具体的には描画したい内容を生成して実行を開始して放置する
   * FIXME: 可読性が死んだ！！！この人でなし！！！
   */
  useEffect(() => {
    console.log("test");
    const parentWidth = parentRef.current ? parentRef.current.offsetWidth : 0;
    const parentHeight = parentRef.current ? parentRef.current.offsetHeight : 0;
    for (let i = 0; i < boxesRef.length; i++) {
      CreateShakeAndUpAnimation(boxesRef[i], {
        startTime: getRandomValue(0, 1) * i,
        xPosition:
          parentWidth / 5 +
          (parentWidth / 7) * i +
          getRandomValue(-parentWidth / 7, parentWidth / 7),
        yStartPosition: 0,
        yEndPosition: -parentHeight * 1.15,
        shakeWidth: getRandomValue(7, 20),
        duration: getRandomValue(3, 12),
      });
    }
  }, []);

  /**
   * スクロールの導線の表示・非常時を管理する
   */
  useEffect(() => {
    if (window.innerWidth / window.innerHeight < 2.25) {
      window.addEventListener("scroll", hiddenNavigator);
    } else document.getElementById(id)!.style.visibility = "hidden";

    return () => {
      if (window.innerWidth / window.innerHeight < 2.25) {
        window.removeEventListener("scroll", hiddenNavigator);
      }
    };
  }, []);

  return (
    <div className={styles.inner}>
      <div className={styles.headline} ref={parentRef}>
        <div className={styles.headline_inner}>
          <h1 className={styles.headline_title}>rurito0125's</h1>
          <h1 className={styles.headline_title}>Portfolio</h1>
          <h2 className={styles.headline_subtitle}>よわよわエンジニア</h2>
        </div>
        <div className={styles.headline_background_block}>
          {(() => {
            const icons = [];
            for (let i = 0; i < 5; i++) {
              icons.push(
                <img
                  className={styles.headline_background_icon}
                  ref={boxesRef[i]}
                  src="/images/ange_icon_small.png"
                  alt="アンジュのアイコン"
                ></img>
              );
            }
            return icons;
          })()}
        </div>
      </div>
      <img
        className={styles.navigate}
        src="/images/expand.svg"
        alt="スクロールナビゲーター"
        id="navigator"
      ></img>
    </div>
  );
};

export default Intro;
