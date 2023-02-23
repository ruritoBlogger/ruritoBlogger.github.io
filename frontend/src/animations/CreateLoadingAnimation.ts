import { MutableRefObject } from "react";
import { gsap, CSSPlugin } from "gsap";

gsap.registerPlugin(CSSPlugin);

interface ILoadingAnimationProps {
  xCenterPosition: number;
  yCenterPosition: number;
  startTime: number;
  duration: number;
}

export const CreateLoadingAnimation = (
  target: MutableRefObject<null>,
  movingTarget: MutableRefObject<null>,
  deletingTarget: MutableRefObject<null>,
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

  // NOTE: 読み込み画面の表示から非表示を担当
  tl.to(target.current, { opacity: 1 }, animationProps.startTime).to(
    target.current,
    { opacity: 0, duration: 2 },
    `<${animationProps.duration - 2}`
  );

  // NOTE: 中央寄せする対象の移動から非表示を担当
  tl.to(
    movingTarget.current,
    { opacity: 1 },
    animationProps.startTime + animationProps.duration - 4
  )
    .to(
      movingTarget.current,
      {
        x: animationProps.xCenterPosition,
        y: animationProps.yCenterPosition,
        duration: 2,
      },
      "<"
    )
    .to(
      movingTarget.current,
      {
        scale: 0,
        opacity: 0,
        duration: 2,
      },
      "<2"
    );

  // NOTE: 中央寄せする際に消す対象の非表示を担当
  tl.to(
    deletingTarget.current,
    { opacity: 1 },
    animationProps.startTime + animationProps.duration - 4
  ).to(deletingTarget.current, { opacity: 0, duration: 2 }, "<");

  // NOTE: アニメーション後の状態(全て非表示)
  tl.set(target.current, { opacity: 0 });
  tl.set(movingTarget.current, { opacity: 0 });
  tl.set(deletingTarget.current, { opacity: 0 });
};
