import styles from "./index.module.sass";
import { HistoryTemplateProps } from "../type"

export const HistoryTemplate: React.FC<HistoryTemplateProps> = ({ datas }) => {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>経歴</h1>
      {datas.map((data) => (
        <div className={styles.content_block} key={data.title}>
          <h2 className={styles.subtitle}>{data.title}</h2>
          <p className={styles.content}>{data.content}</p>
          {data.link !== undefined ? <p className={styles.content}><a href={data.link}>{data.link_text}</a></p> : ""}
        </div>
      ))}
    </div>
  );
};
