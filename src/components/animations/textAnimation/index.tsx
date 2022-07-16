import { MutableRefObject, useEffect, useRef } from "react";

import { CreateJumpAnimation } from "@/src/animations";

interface Props {
  message: string;
  startTime: number;
  duration: number;
  style: string;
}

export const TextAnimation: React.FC<Props> = ({ message, startTime, style }) => {
  let charsRef: MutableRefObject<null>[] = [];
  for (let i = 0; i < message.length; i++) {
    charsRef.push(useRef(null));
  }

  useEffect(() => {
    for (let i = 0; i < charsRef.length; i++) {
      CreateJumpAnimation(charsRef[i], {
        startTime: startTime + 0.5 * i,
        duration: 2,
        repeat: 1,
        delay: message.length / 2 + 1,
      });
    }
  }, []);

  return (
    <>
      {(() => {
        let text = [];
        for (let i = 0; i < message.length; i++) {
          text.push(
            <span
              key={`TextAnimation-${i}`}
              ref={charsRef[i]}
              className={style}
            >
              {message.charAt(i)}
            </span>
          );
        }
        return text;
      })()}
    </>
  );
};
