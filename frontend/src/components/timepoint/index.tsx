import styles from "./index.module.css";

import { Card } from "../";

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
export const TimePoint: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.inner} key={data.title}>
      <div className={styles.dateWrapper}>
        <p className={styles.dateTitle}>{data.date}</p>
      </div>
      <div className={styles.lineBlock}>
        <p className={styles.line} />
        {/* FIXME: tabindexを当てる場合・対話的コンテンツじゃないとダメらしいのでpタグ使うの辞めたい */}
        <p className={styles.ellipse} tabIndex={0} />
        <p className={styles.line} />
      </div>
      <div className={styles.cardWrapper}>
        <Card {...data} />
      </div>
    </div>
  );
};
