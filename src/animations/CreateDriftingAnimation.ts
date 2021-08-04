import { MutableRefObject } from "react";
import { gsap } from "gsap";

interface IDriftingAnimationProps {
  startTime: number;
  duration: number;
}

export const CreateDriftingAnimation = (
  target: MutableRefObject<null>,
  animationProps: IDriftingAnimationProps
) => {
  /**
   * GSAPを用いて揺れ動かすのアニメーションを描画する
   * @param target: 動かしたい対象
   * @param animationProps: どう動かすのか
   * @param animationProps.startTime: アニメーションの開始時刻
   * @param animationProps.duration: 一連のアニメーションの実行時間
   */
  const moveTime = animationProps.duration / 8;
  const tl = gsap.timeline({
    repeat: 1,
    delay: 0,
  });

  tl.to(
    target.current,
    { yPercent: -10, duration: moveTime, ease: "sine.inOut" },
    animationProps.startTime
  )
    .to(
      target.current,
      { yPercent: 10, duration: moveTime * 2, ease: "sine.inOut" },
      `<${moveTime}`
    )
    .to(
      target.current,
      { yPercent: 0, duration: moveTime, ease: "sine.inOut" },
      `<${moveTime * 2}`
    )
    .to(
      target.current,
      { rotation: 360, duration: moveTime * 8, ease: "none" },
      animationProps.startTime
    );
};
