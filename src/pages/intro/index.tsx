import styles from "./index.module.sass";
import { useEffect } from "react";

const Intro: React.FC = () => {
  const id = "navigator";

  const ShowBackgroundIcons = () => {
    let icons = [];
    for (let i = 0; i < 5; i++) {
      icons.push(
        <div className={styles.background_icon_move_top} data-kind={i}>
          <img
            className={styles.background_icon}
            src="./images/ange_icon_small.png"
            alt="angeのアイコン"
          ></img>
        </div>
      );
    }
    return <div>{icons}</div>;
  };

  // FIXME: null回避のやり方が微妙よな
  const hiddenNavigator = () => {
    if (200 < window.scrollY) {
      document.getElementById(id)!.style.visibility = "hidden";
    } else {
      document.getElementById(id)!.style.visibility = "visible";
    }
  };

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
      <div className={styles.headline}>
        <div className={styles.headline_inner}>
          <h1 className={styles.headline_title}>rurito0125's</h1>
          <h1 className={styles.headline_title}>Portfolio</h1>
          <h2 className={styles.headline_subtitle}>よわよわエンジニア</h2>
        </div>
        <div className={styles.background_icons}>
          <ShowBackgroundIcons />
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
