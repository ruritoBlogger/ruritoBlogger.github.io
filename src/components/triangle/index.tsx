import styles from "./index.module.sass";

const Triangle: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.triangle}>
          <div className={styles.inner}>
            <div className={styles.inner_triangle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triangle;
