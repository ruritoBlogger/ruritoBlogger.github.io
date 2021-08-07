import { MutableRefObject } from "react";
import { gsap } from "gsap";

interface IJumpAnimationProps {
  startTime: number;
  duration: number;
  repeat: number;
  delay: number;
}

export const CreateJumpAnimation = (
  target: MutableRefObject<null>,
  animationProps: IJumpAnimationProps
) => {
  /**
   * GSAPを用いて跳ねさせるアニメーション
   * @param target: 動かしたい対象
   * @param animationProps: どう動かすのか
   * @param animationProps.startTime: アニメーションの開始時刻
   * @param animationProps.duration: 一連のアニメーションの実行時間
   */
  const tl = gsap.timeline({
    repeat: 0,
    delay: 0,
  });

  for (let i = 0; i < animationProps.repeat + 1; i++) {
    tl.to(
      target.current,
      { yPercent: 0 },
      animationProps.startTime + animationProps.delay * i
    )
      .to(target.current, {
        yPercent: -50,
        duration: animationProps.duration / 4,
      })
      .to(target.current, {
        yPercent: 0,
        duration: animationProps.duration / 4,
      })
      .to(
        target.current,
        {
          yPercent: 10,
          scaleX: 1.25,
          scaleY: 0.8,
          duration: animationProps.duration / 4,
        },
        `<${animationProps.duration / 16}`
      )
      .to(target.current, {
        yPercent: 0,
        scaleX: 1,
        scaleY: 1,
        duration: animationProps.duration / 4,
      });
  }
};
