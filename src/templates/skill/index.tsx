import styles from "./index.module.sass";

export const SkillTemplate: React.FC = () => {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>スキル</h1>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>C++</h2>
        <p className={styles.content}>
          RoboCupでの開発や競プロ・組み込みソフトウェアの開発などに使ってました.
          競プロは2020年5月頃に緑まで行きました(アカウントは削除したので証拠は無いですが).
          組み込みソフトウェアの話だと,
          Opencvを用いた簡単な画像処理とかOSSを用いたQRコードのデコード処理とか書いてました.
          RoboCupの開発では大規模なプロジェクトを改良してたりしました. また,
          Pythonと組み合わせて深層強化学習の実装もしたことがあります.
          スマートポインタとかはわからないです.
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>Python</h2>
        <p className={styles.content}>
          機械学習(Chainer・Keras)を用いた深層学習や強化学習の実装・研究・組み込みソフトウェアの開発などに使ってます.
          ChainerはDNN, CNN, LSTMとかの実装はやったことがあります.
          Kerasについてはサンプル回した程度なのであまり詳しくは無いです.
          強化学習については, OpenAI Gymを使う or
          使わないパターン両方の実装経験があります. 言語知識はそんなに無いです.
          組み込みソフトウェアの話だと,
          OpenCVを用いた画像処理とかプロセスを用いた並列処理,
          スレッドやasyncioを用いた並行処理, socket通信などの実装経験はあります.
          ジェネレーターとかはあまり分かんないです.
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>JavaScript or TypeScript</h2>
        <p className={styles.content}>
          ReactやVue.js,
          Cycle.jsを用いたwebフロントエンドの開発などに使ってます.
          型パズルとかはよくわかんないです. JQueryは触ったことないです.
          IDEに型を教えてもらいながら生きてます.
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>HTML周り</h2>
        <p className={styles.content}>
          最低限は書けるはずです.
          ブラウザに効率よく理解してもらうための書き方はまだまだ出来ないです.
          ARIAとかは勉強中です. cssについてはscss(sass記法含む),
          stylusを触ったことがあります. Tailwindは触ったことはないです.
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>その他</h2>
        <p className={styles.content}>
          gitは最低限は使えると思います. 開発環境はLinux(Ubuntu)なので,
          Unixコマンドとかは慣れてるつもりです. Dockerはよくわかんないです.
        </p>
      </div>
    </div>
  );
};
