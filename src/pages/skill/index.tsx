import styles from "./index.module.sass";

const Skill: React.FC = () => {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>スキル</h1>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>C++ 2 ~ 3年</h2>
        <p className={styles.content}>
          RoboCupでの開発や競プロ・組み込みソフトウェアの開発など
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>Python 1.5年</h2>
        <p className={styles.content}>
          機械学習(Chainer・Keras)を用いた深層学習や強化学習の実装・組み込みソフトウェアの開発など
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>JavaScript or TypeScript 1年</h2>
        <p className={styles.content}>
          ReactやVue.js, Cycle.jsを用いたwebフロントエンドの開発など
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>その他</h2>
        <p className={styles.content}>
          Unixコマンドとかgitは一般学生猿ジニア並に出来る筈です
        </p>
      </div>
    </div>
  );
};

export default Skill;
