import styles from "./index.module.sass";
import Triangle from "../triangle";

const AngeMotif: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.top_triangle_wrapper}>
          <div className={styles.circle_wrapper}>
            <div className={styles.circle} />
          </div>
          <Triangle />
          <div className={styles.circle_wrapper}>
            <div className={styles.circle} />
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <Triangle />
        <div className={styles.circle_wrapper}>
          <div className={styles.circle} />
        </div>
        <Triangle />
      </div>
    </div>
  );
};

export default AngeMotif;
