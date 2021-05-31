import styles from "./index.module.sass";

import Card from "../card/index";

interface Props {
  data: {
    date: string;
    title: string;
    content: string;
    link?: string;
    link_text?: string;
    img_link?: string;
    img_alt?: string;
  };
}

/**
 * タイムラインで表示するカードやTimelineの導線をひとまとめにしたコンポーネント
 * @param data 表示するデータ
 */
const TimePoint: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.dateWrapper}>
        <p className={styles.dateTitle}>{data.date}</p>
      </div>
      <div className={styles.lineBlock}>
        <p className={styles.line} />
        <p className={styles.ellipse} />
        <p className={styles.line} />
      </div>
      <div className={styles.cardWrapper}>
        <Card {...data} />
      </div>
    </div>
  );
};

export default TimePoint;
