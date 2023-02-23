import { MutableRefObject } from "react";
import { gsap } from "gsap";

interface IMovingWindowFromRightAnimationProps {
  startTime: number;
  duration: number;
}

export const CreateMovingWindowFromRightAnimation = (
  target: MutableRefObject<null>,
  animationProps: IMovingWindowFromRightAnimationProps
) => {
  /**
   * GSAPを用いて右から表示するアニメーション
   * @param target: 動かしたい対象
   * @param animationProps: どう動かすのか
   * @param animationProps.startTime: アニメーションの開始時刻
   * @param animationProps.duration: 一連のアニメーションの実行時間
   */
  const tl = gsap.timeline({
    repeat: 0,
    delay: 0,
  });

  tl.fromTo(
    target.current,
    { xPercent: 100 },
    { xPercent: 0, duration: animationProps.duration },
    animationProps.startTime
  );
};
