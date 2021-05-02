import styles from "./main.styl";

const Main: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>何見てんだ</h1>
      <h1 className={styles.title}>まだ製作中だぞ</h1>
      <h1 className={styles.subtitle}>
        制作の進捗は->
        <a href="https://twitter.com/ruriro0125">Twitter</a>
      </h1>
      <h1 className={styles.subtitle}>
        ソースコードは->
        <a href="https://github.com/ruritoBlogger/ruritoBlogger.github.io">
          github
        </a>
        <h1 className={styles.subtitle}>GW中には完成させます</h1>
      </h1>
    </div>
  );
};

export default Main;
