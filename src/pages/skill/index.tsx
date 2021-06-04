import styles from "./index.module.sass";

const Skill: React.FC = () => {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>スキル</h1>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>C++ 2 ~ 3年</h2>
        <p className={styles.content}>
          RoboCupでの開発や競プロ・組み込みソフトウェアの開発などに使ってました.
          最低限は書けますが言語機能についてはそこまで詳しくないです.
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>Python 1.5年</h2>
        <p className={styles.content}>
          機械学習(Chainer・Keras)を用いた深層学習や強化学習の実装・研究・組み込みソフトウェアの開発などに使ってます.
          ジェネレーターとかはあまり分かんないです. 型アノテーションを付けてないコードが嫌いです.
          バージョンは3.6.8をよく使ってます(大体このバージョンで動くので).
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>JavaScript or TypeScript 1年</h2>
        <p className={styles.content}>
          ReactやVue.js, Cycle.jsを用いたwebフロントエンドの開発などに使ってます.
          型パズルとかはよくわかんないです. IDEに型を教えてもらいながら生きてます.
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>その他</h2>
        <p className={styles.content}>
          gitは最低限は使えると思います. 開発環境はLinux(Ubuntu)なので, Unixコマンドとかは慣れてるつもりです. Dockerはよくわかんないです.
        </p>
      </div>
    </div>
  );
};

export default Skill;
