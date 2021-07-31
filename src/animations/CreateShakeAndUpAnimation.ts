import { MutableRefObject } from "react";
import { gsap } from "gsap";

interface IShakeAndUpAnimationProps {
  startTime: number;
  xPosition: number;
  yStartPosition: number;
  yEndPosition: number;
  shakeWidth: number;
  duration: number;
}

export const CreateShakeAndUpAnimation = (
  target: MutableRefObject<null>,
  animationProps: IShakeAndUpAnimationProps
) => {
  /**
   * GSAPを用いて揺れながら上昇していくアニメーションを生成する
   * @param target: 動かしたい対象
   * @param animationProps: どう動かすのか
   * @param animationProps.startTime: アニメーションの開始時刻
   * @param animationProps.xPosition: 対象のx座標
   * @param animationProps.yStartPosition: 対象のy座標(アニメーションを開始した時)
   * @param animationProps.yEndPosition: 対象のy座標(アニメーションを終了した時)
   * @param animationProps.shakeWidth: 揺れ幅
   * @param animationProps.duration: 一連のアニメーションの実行時間
   */
  const tl = gsap.timeline({
    repeat: -1,
    delay: 0,
  });

  /**
   * min以上 min + range以下の数値をランダムに生成する
   * @param range 生成する値の最大値 - minの値
   * @param min 生成する値の最小値
   * @returns 生成した値
   */
  const getRandomArbitrary = (range: number, min: number): number => {
    return range * Math.random() + min;
  };

  const targetScale = getRandomArbitrary(0.8, 0.6);

  // 初期状態を定義
  tl.to(
    target.current,
    { x: animationProps.xPosition, rotation: 0, duration: 0 },
    animationProps.startTime
  ).to(
    target.current,
    {
      x: animationProps.xPosition - animationProps.shakeWidth,
      yPercent: animationProps.yStartPosition,
      scale: targetScale,
      duration: 0,
    },
    "<"
  );

  // 振動回数
  const shakeNum = 3;

  // 縦の描画範囲
  const yDiff = animationProps.yEndPosition - animationProps.yStartPosition;

  // 現在の回転角度
  let currentRotation = 0;

  // 右回転か左回転か
  const isRightRotate = Math.random() >= 0.5 ? 1 : -1;

  // 1振動でどれだけ回転させるかどうか
  const rotationRange = getRandomArbitrary(
    300 * isRightRotate,
    60 * isRightRotate
  );

  /**
   * shakeNum回左右に振動させる
   * 振動の幅などはanimationPropsと上の変数を用いて調整する
   *
   * 最初のtoで左から右へ、次のtoで右から左へと移動させる
   */
  for (let i = 0; i < shakeNum; i++) {
    tl.to(
      target.current,
      {
        x: animationProps.xPosition + animationProps.shakeWidth * Math.random(),
        duration: animationProps.duration / (shakeNum * 2),
        yoyo: true,
        ease: "sine.inOut",
      },
      animationProps.startTime +
        (animationProps.duration * (i * 2)) / (shakeNum * 2)
    )
      .to(
        target.current,
        {
          y:
            animationProps.yStartPosition +
            (yDiff * (i * 2 + 1)) / (shakeNum * 2),
          rotation: currentRotation + rotationRange / 2,
          duration: animationProps.duration / (shakeNum * 2),
          ease: "none",
        },
        "<"
      )
      .to(
        target.current,
        {
          x:
            animationProps.xPosition -
            animationProps.shakeWidth * Math.random(),
          duration: animationProps.duration / (shakeNum * 2),
          yoyo: true,
          ease: "sine.inOut",
        },
        animationProps.startTime +
          (animationProps.duration * (i * 2 + 1)) / (shakeNum * 2)
      )
      .to(
        target.current,
        {
          y:
            animationProps.yStartPosition +
            (yDiff * (i * 2 + 2)) / (shakeNum * 2),
          rotation: currentRotation + rotationRange,
          duration: animationProps.duration / (shakeNum * 2),
          ease: "none",
        },
        "<"
      );
    currentRotation += rotationRange;
  }
};
