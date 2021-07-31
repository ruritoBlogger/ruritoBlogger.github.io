import { MutableRefObject } from "react";

interface IShakeAndUpAnimationProps {
  xPosition: number;
  yPosition: number;
  shakeWidth: number;
  rotation: number;
  duration: number;
}

export const CreateShakeAndUpAnimation = (
  tl: gsap.core.Timeline,
  target: MutableRefObject<null>,
  animationProps: IShakeAndUpAnimationProps
): gsap.core.Timeline => {
  /**
   * GSAPを用いて揺れながら上昇していくアニメーションを生成する
   * 直前のアニメーションと同時に実行される
   */
  tl.to(target.current, { x: animationProps.xPosition, rotation: 0 }, "<")
    .to(target.current, {
      rotation: animationProps.rotation,
      yPercent: animationProps.yPosition,
      duration: animationProps.duration,
    })
    .to(
      target.current,
      { x: animationProps.xPosition + animationProps.shakeWidth },
      "<"
    )
    .to(
      target.current,
      { x: animationProps.xPosition - animationProps.shakeWidth },
      `<${animationProps.duration / 2}`
    )
    .to(
      target.current,
      { x: animationProps.xPosition },
      `<${animationProps.duration / 4}`
    );

  return tl;
};
