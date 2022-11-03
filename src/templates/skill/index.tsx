import styles from "./index.module.css";
import { SkillTemplateProps } from "../type"

export const SkillTemplate: React.FC<SkillTemplateProps> = ({ datas }) => {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>スキル</h1>
      {datas.map((data) => (
        <div className={styles.content_block} key={data.title}>
          <h2 className={styles.subtitle}>{data.title}</h2>
          <p className={styles.content}>
            {data.content}
          </p>
        </div>
      ))}
    </div>
  );
};
