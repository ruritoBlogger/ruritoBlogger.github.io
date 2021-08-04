import { MutableRefObject } from "react";
import { gsap } from "gsap";

interface ILoadingAnimationProps {
  startTime: number;
  duration: number;
}

export const CreateLoadingAnimation = (
  target: MutableRefObject<null>,
  animationProps: ILoadingAnimationProps
) => {
  /**
   * GSAPを用いて読み込み中のアニメーションを描画する
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
    { opacity: 1 },
    { xPercent: 0, duration: animationProps.duration },
    animationProps.startTime
  );

  tl.set(target.current, { opacity: 0 });
};
