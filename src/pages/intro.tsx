import styles from "./intro.styl";

const Intro: React.FC = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.headline}>
        <div className={styles.headline_inner}>
          <h1 className={styles.title}>rurito0125's</h1>
          <h1 className={styles.title}>Portfolio</h1>
          <h2 className={styles.subtitle}>よわよわエンジニア</h2>
        </div>
      </div>
      <img className={styles.navigate} src="/images/expand.svg"></img>
    </div>
  );
};

export default Intro;
