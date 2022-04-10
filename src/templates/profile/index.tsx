import styles from "./index.module.sass";

export const ProfileTemplate: React.FC = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.box}>
        <h1 className={styles.title}>rurito0125</h1>
        <div className={styles.content_block}>
          <p className={styles.content}>立命館大学 情報理工学部 情報理工学科</p>
          <p className={styles.content}>知能情報コース卒</p>
          <p className={styles.content}>知能エンターテイメント研に所属していました</p>
        </div>

        <div className={styles.content_block}>
          <p className={styles.content}>
            Vimに侵食されたVSCodeをよく使います
          </p>
          <p className={styles.content}>にじさんじ(さんばか)が好きです</p>
          <p className={styles.content}>就職したので趣味開発の時間が減ってしまいつらい</p>
        </div>

        <div className={styles.image_block}>
          <div className={styles.image_wrapper}>
            <a href="https://twitter.com/ruriro0125">
              <img
                className={styles.twitter_img}
                src="./images/twitter.png"
                alt="Twitterのアイコン"
              ></img>
            </a>
          </div>
          <div className={styles.image_wrapper}>
            <a href="https://github.com/ruritoBlogger">
              <img
                className={styles.github_img}
                src="./images/GitHub-Mark-120px-plus.png"
                alt="GitHubのアイコン"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.image_wrapper}>
          <img
            className={styles.profile_img}
            src="./images/profile.jpeg"
            alt="昔好きだったゲームのスクショ"
          ></img>
        </div>
        <p className={`${styles.content} ${styles.disabledWhenSmartphone}`}>
          昔好きだったゲームのスクショ
        </p>
      </div>
    </div>
  );
};
