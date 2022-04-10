import styles from "./index.module.sass";

export const HistoryTemplate: React.FC = () => {
  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>経歴</h1>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>2019/8 RoboCup 日本大会出場</h2>
        <p className={styles.content}>
          RoboCup JapanOpen 2020 Nagaoka 2DSoccer
          Simulation部門にRi-oneというチームの一員として参加しました.
          <a href="#RoboCupの日本大会出場">詳しい話はこちら</a>
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>2020/4 RoboCup 世界大会出場(権獲得)</h2>
        <p className={styles.content}>
          RoboCup 2020 Bordeaux 2DSoccer
          Simulation部門にRi-oneでエントリーしました。
          <a href="#RoboCupの世界大会に出場(権獲得)">詳しい話はこちら</a>
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>
          2020/8 ~ 2021/4 株式会社RUTILEA アルバイト
        </h2>
        <p className={styles.content}>
          アルバイトとして開発に参加してました.
          C++やPythonを用いて色々やってました.
          普通のPCやJetson Nanoなどの環境構築やPythonを用いたバックエンドの開発, C++やPythonを用いたハードウェアの制御スクリプトの実装などやってました.
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>2020/9 株式会社楽天 インターン</h2>
        <p className={styles.content}>
          株式会社楽天の「二子玉川 夏の陣 2020 」に参加してました.
          <a href="#楽天のインターンに参加">詳しい話はこちら</a>
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>
          2020/9 株式会社オプティム インターン
        </h2>
        <p className={styles.content}>
          オプティム サマーインターン2020に参加してました.
          <a href="#オプティムの夏季インターンに参加">詳しい話はこちら</a>
        </p>
      </div>
      <div className={styles.content_block}>
        <h2 className={styles.subtitle}>2021/4 ~ 株式会社HERP インターン</h2>
        <p className={styles.content}>
          フロントエンドエンジニアとしてインターンに参加しています.
          Cycle.jsとかJSXとか使ってフロント書いてます.
        </p>
      </div>
    </div>
  );
};
