import styles from "./index.module.sass";

const Intro: React.FC = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.headline}>
        <div className={styles.headline_inner}>
          <h1 className={styles.headline_title}>rurito0125's</h1>
          <h1 className={styles.headline_title}>Portfolio</h1>
          <h2 className={styles.headline_subtitle}>よわよわエンジニア</h2>
        </div>
      </div>
      <img className={styles.navigate} src="/images/expand.svg"></img>
    </div>
  );
};

export default Intro;
