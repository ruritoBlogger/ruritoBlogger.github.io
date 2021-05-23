import Timeline from "@material-ui/lab/Timeline";

import Card from "../../components/card/index";
import styles from "./timeline.styl";

interface DataProps {
  date: string;
  title: string;
  content: string;
  link?: string;
  link_text?: string;
  img_link?: string;
}

const TimelinePage: React.FC = () => {
  const datas: DataProps[] = [
    {
      date: "2017/5",
      title: "基本情報技術者取得",
      content:
        "国家資格に憧れてたので取りました. 午後の選択問題はCを取りました. これがプログラミングとの最初の出会いでした.",
    },
    {
      date: "2018/8~9",
      title: "初めてのwebアプリ実装",
      content:
        "Ruby on Rails5を用いて初めてwebアプリを作りました. 夏休みを全て使ってHTML + CSS + Ruby + Railsの勉強してました.",
      link:
        "https://github.com/ruritoBlogger/Informationization-of-refrigerator",
      link_text: "ソースコード(Github)",
    },
    {
      date: "2019/8",
      title: "RoboCup 日本大会出場",
      content:
        "Ri-oneというチームの一員としてRoboCup JapanOpen2019 Nagaokaに出場しました. 結果は10位中8位と微妙でしたが良い経験になりました.",
    },
    {
      date: "2019/12",
      title: "宝くじの当選番号を予想したかった",
      content:
        "機械学習を用いて宝くじ(numbers3)の当選番号を予想しようとしてました. CNNやLSTMを用いてあれこれしたのですが全く当たらなかった記憶.",
      link: "https://github.com/ruritoBlogger/get-5000000000000yen",
      link_text: "ソースコード(Github)",
    },
    {
      date: "2020/4",
      title: "RoboCup 世界大会に出場(権獲得)",
      content:
        "Ri-oneというチームの一員としてRoboCup2020 Bordeauxの出場権を獲得しました. 大会はコロナで延期になったため出場権獲得に留まっています. 出場権を獲得するためにTDPというペーパーをチームで作成しました. 私は第3章の深層強化学習部分の実装や執筆を担当しました.",
      link:
        "https://drive.google.com/file/d/1IkTX41iIFlZFI5_5l7lpCPS0X4Gi_vn8/view?usp=sharing",
      link_text: "執筆したTDP",
    },
    {
      date: "2020/7",
      title: "Reactを用いたwebアプリ実装",
      content:
        "React + TS + Firebaseを用いたサーバーレスなwebアプリを作りました. 中身はTODO + 時間割管理が出来る(らしい). インターンの事前課題で提出しました.",
      link: "https://github.com/ruritoBlogger/TaskManagement_app",
      link_text: "ソースコード(Github)",
      img_link: "./images/TaskManagement.png",
    },
    {
      date: "2020/9",
      title: "楽天のインターンに参加",
      content:
        "楽天の二子玉川 夏の陣2020というインターン(2週間)に参加しました. お題に沿ってアプリの案出しからプロトタイプの実装までを学生でチームを作って取り組むという内容でした. フロントエンドのリーダーとして、React + Reduxを用いたフロントの環境構築から実装までを担当しました.",
      link: "https://github.com/shortintern2020-B-frontier/TeamB",
      link_text: "ソースコード(Github)",
      img_link: "./images/TheaTalk.png",
    },
    {
      date: "2020/9",
      title: "オプティムの夏季インターンに参加",
      content:
        "オプティムのインターン(2週間)に参加しました. 内容は実務開発で、Vue.js + Typescriptを用いたフロントエンドの開発に携わりました.",
    },
    {
      date: "2020/9",
      title: "非公式ファンサイト制作",
      content:
        "私が良く観てるVtuberの非公式ファンサイトを勝手に作りました. React + Typescript + Firebaseを用いたサーバーレスなwebサイトです. Atomic Componentsの概念の導入やレスポンシブデザイン対応など色々苦労しました.",
      link: "https://github.com/ruritoBlogger/Sanbaka_1.5_fan_site",
      link_text: "ソースコード(Github)",
      img_link: "./images/fansite.png",
    },
    {
      date: "2021/5",
      title: "ポートフォリオ制作",
      content:
        "GW中暇だったので作りました. いつものReact + Typescript + Firebaseで作ってます.",
      link: "https://github.com/ruritoBlogger/ruritoBlogger.github.io",
      link_text: "ソースコード(Github)",
      img_link: "./images/portfolio.png",
    },
  ];

  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>制作物・実績</h1>
      <Timeline>
        {datas.map((data) => (
          <Card {...data} />
        ))}
      </Timeline>
    </div>
  );
};

export default TimelinePage;
