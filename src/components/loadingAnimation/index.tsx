import { ReactNode, useEffect, useRef } from "react";

import { CreateLoadingAnimation } from "../../animations/CreateLoadingAnimation";
import styles from "./index.module.sass";

interface Props {
  children: ReactNode;
}

const LoadingAnimation: React.FC<Props> = ({ children }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    CreateLoadingAnimation(targetRef, { startTime: 0, duration: 1 });
  }, []);

  return (
    <div className={styles.loading_inner}>
      <div className={styles.animation_block} ref={targetRef}></div>
      {children}
    </div>
  );
};

export default LoadingAnimation;
