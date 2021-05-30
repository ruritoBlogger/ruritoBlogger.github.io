import styles from "./index.module.sass";

interface Props {
  date: string;
  title: string;
  content: string;
  link?: string;
  link_text?: string;
  img_link?: string;
}

/**
 * タイムラインで表示するカードのコンポーネント
 * TODO: material-ui飛ばしたので自前でコンポーネントを作る
 *
 * @param date 表示するカードの時刻
 * @param title 表示するカードのタイトル
 * @param content 表示するカードの情報
 * @param link 表示するカードのリンク
 * @param link_text 表示するカードのリンクで表示するメッセージ
 * @param img_link 表示するカードの画像のリンク(存在しない場合もある)
 */
const Card: React.FC<Props> = ({
  date,
  title,
  content,
  link,
  link_text,
  img_link,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_inner}>
        <p className={styles.subtitle} id={title}>
          {title}
        </p>
        {(() => {
          if (img_link !== undefined) {
            return <img src={img_link} className={styles.img} />;
          } else return null;
        })()}
        <p className={styles.content}>{content}</p>
        {(() => {
          if (link !== undefined) {
            return (
              <div>
                <a href={link}>
                  <p className={styles.content}>{link_text}</p>
                </a>
              </div>
            );
          } else return null;
        })()}
      </div>
    </div>
  );
};

export default Card;
