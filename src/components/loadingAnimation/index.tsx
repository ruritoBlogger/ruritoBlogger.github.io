import { ReactNode, useEffect, useRef } from "react";

import TextAnimation from "../textAnimation/index";
import { CreateLoadingAnimation } from "../../animations/CreateLoadingAnimation";
import { CreateDriftingAnimation } from "../../animations/CreateDriftingAnimation";
import styles from "./index.module.sass";

interface Props {
  children: ReactNode;
}

const LoadingAnimation: React.FC<Props> = ({ children }) => {
  // FIXME: anyで握りつぶしちゃ＾〜う
  const windowRef: any = useRef(null);
  const imageRef: any = useRef(null);
  const anotherRef = useRef(null);

  const animationTime = 7.5;

  const noScroll = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    CreateLoadingAnimation(windowRef, imageRef, anotherRef, {
      startTime: 0,
      duration: animationTime,
      // NOTE: 画面中央
      xCenterPosition:
        windowRef.current.offsetWidth / 2 -
        imageRef.current.offsetLeft -
        imageRef.current.width / 2,
      yCenterPosition:
        windowRef.current.offsetHeight / 2 -
        imageRef.current.offsetTop -
        imageRef.current.height / 2,
    });
    CreateDriftingAnimation(imageRef, {
      startTime: 0,
      duration: animationTime,
    });

    document.addEventListener("touchmove", noScroll, { passive: false });
    document.addEventListener("mousewheel", noScroll, { passive: false });
    setTimeout(() => {
      document.removeEventListener("touchmove", noScroll);
      document.removeEventListener("mousewheel", noScroll);
    }, animationTime * 1000);
  }, []);

  return (
    <div className={styles.loading_inner}>
      <div className={styles.animation_block} ref={windowRef}>
        <div className={styles.animation_block_inner}>
          <div className={styles.animation_icon_block}>
            <img
              className={styles.animation_icon}
              ref={imageRef}
              src="/images/ange_icon_small.png"
              alt="アンジュのアイコン"
            ></img>
          </div>
          <div className={styles.animation_title_block} ref={anotherRef}>
            <h1 className={styles.animation_title}>
              <TextAnimation
                message="Loading..."
                startTime={0}
                duration={animationTime}
                style={styles.animation_char}
              />
            </h1>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default LoadingAnimation;
