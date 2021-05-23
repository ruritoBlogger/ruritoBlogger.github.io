import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";

import styles from "./card.styl";

interface Props {
  date: string;
  title: string;
  content: string;
  link?: string;
  link_text?: string;
  img_link?: string;
}

// NOTE: material-uiのmedia query用
// WARN: 定義している要素は全部使いません(全て定義しないと怒られるので定義してるだけ)
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 764,
      md: 960,
      lg: 1024,
      xl: 1920,
    },
  },
});

// FIXME: stylusの方で定義したものを用いたいが〜〜〜〜〜〜
//        スタイルの定義部分が複数ヶ所に分散しているのが最高に気持ち悪い
const useStyles = makeStyles((theme) => ({
  breakpoints: {
    smartphone: 764,
    tablet: 1024,
  },
  OppositeContent: {
    flex: 2,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      flex: 1,
    },
  },
  Separator: {
    [theme.breakpoints.down("xs")]: {
      "margin-top": "5px",
    },
  },
  Content: {
    flex: 5,
  },
  Paper: {
    padding: "6px 16px",
    margin: "20px 0px",
  },
}));

/**
 * タイムラインで表示するカードのコンポーネント
 * Material-uiにおんぶに抱っこされてます
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
  const classes = useStyles();

  return (
    <TimelineItem id={title}>
      <TimelineOppositeContent className={classes.OppositeContent}>
        <h2 className={styles.subtitle}>{date}</h2>
      </TimelineOppositeContent>
      <TimelineSeparator className={classes.Separator}>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={classes.Content}>
        <h2 className={styles.dateTitle}>{date}</h2>
        <Paper elevation={3} className={classes.Paper}>
          <h2 className={styles.subtitle}>{title}</h2>
          {(() => {
            if (img_link !== undefined) {
              return <img src={img_link} className={styles.img} />;
            }
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
            }
          })()}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Card;
