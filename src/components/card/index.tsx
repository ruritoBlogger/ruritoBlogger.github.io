import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

import styles from "./card.styl";

interface Props {
  date: string;
  title: string;
  content: string;
  link?: string;
  img_link?: string;
}

/**
 * タイムラインで表示するカードのコンポーネント
 * Material-uiにおんぶに抱っこされてます
 *
 * @param date 表示するカードの時刻
 * @param title 表示するカードのタイトル
 * @param content 表示するカードの情報
 * @param link 表示するカードのリンク
 * @param img_link 表示するカードの画像のリンク(存在しない場合もある)
 */
const Card: React.FC<Props> = ({ date, title, content, link, img_link }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent>{date}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {title}
        {content}
      </TimelineContent>
    </TimelineItem>
  );
};

export default Card;
