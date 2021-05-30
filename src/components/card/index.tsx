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
    <div key={title}>
      <h1 className={styles.title} id={title}>
        Card
      </h1>
      <p>{date}</p>
      <p>{title}</p>
      <p>{content}</p>
      <p>{link}</p>
      <p>{link_text}</p>
      <p>{img_link}</p>
    </div>
  );
};

export default Card;
