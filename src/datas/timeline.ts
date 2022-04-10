import { ITimelineData } from "../templates/type"

export const TimelineDatas: ITimelineData[] = [
    {
        date: "2017/5",
        title: "基本情報技術者取得",
        content: `
          国家資格に憧れてたので取りました. 
          午後の選択問題はCを取りました. 
          これがプログラミングとの最初の出会いでした. 
          ちなみに過去に二回落ちてます.
        `,
    },
    {
        date: "2018/8~9",
        title: "初めてのwebアプリ実装",
        content: `
          Ruby on Rails5を用いて初めてwebアプリを作りました. 
          夏休みを全て使ってHTML + CSS + Ruby + Railsの勉強してました. 
          内容としては, 冷蔵庫の中身を効率的にweb上で管理してQOLを上げよう！
          みたいなものです. UIが非常に終わっているので黒歴史筆頭候補です.
        `,
        link: "https://github.com/ruritoBlogger/Informationization-of-refrigerator",
        link_text: "ソースコード(Github)",
    },
    {
        date: "2019/8",
        title: "RoboCupの日本大会出場",
        content: `
          Ri-oneというチームの一員としてRoboCup JapanOpen2019 Nagaokaに出場しました. 
          結果は10位中8位と微妙でしたが良い経験になりました. 
          小学生が爆速でターミナル叩いていたのを驚愕しながら見守っていた記憶.
        `,
    },
    {
        date: "2019/12",
        title: "宝くじの当選番号を予想したかった",
        content: `
          機械学習を用いて宝くじ(numbers3)の当選番号を予想しようとしてました. 
          CNNやLSTMを用いてあれこれしたのですが全く当たらなかったです. かなしい.
        `,
        link: "https://github.com/ruritoBlogger/get-5000000000000yen",
        link_text: "ソースコード(Github)",
    },
    {
        date: "2020/4",
        title: "RoboCupの世界大会に出場(権獲得)",
        content: `
          Ri-oneというチームの一員としてRoboCup2020 Bordeauxの出場権を獲得しました. 
          大会はコロナで延期になったため出場権獲得に留まっています. 
          出場権を獲得するためにTDPというペーパーをチームで作成しました. 
          私は第3章の深層強化学習部分の実装や執筆を担当しました. 
          内容としては,前処理にCNNを用いてフィールドの特徴量(TDPでは失点するかどうかを表す危険度と表現)を抽出して, 
          普通のDQNに食わせて学習させてました. 正月とか返上してずっと実装してました. 
        `,
        link: "https://drive.google.com/file/d/1IkTX41iIFlZFI5_5l7lpCPS0X4Gi_vn8/view?usp=sharing",
        link_text: "執筆したTDP",
    },
    {
        date: "2020/7",
        title: "Reactを用いたwebアプリ実装",
        content: `
          React + TS + Firebaseを用いたサーバーレスなwebアプリを作りました. 
          中身はTODO + 時間割管理が出来る(らしい). 
          インターンの事前課題で提出しました. 
          2週間でReactやFirebaseの勉強を一からしながら作ったので結構ガバガバです. 
          いつかNext.jsを用いてリファクタリングしたい.
        `,
        link: "https://github.com/ruritoBlogger/TaskManagement_app",
        link_text: "ソースコード(Github)",
        img_link: "./images/TaskManagement.png",
        img_alt: "Todoアプリのトップページのイメージ",
    },
    {
        date: "2020/9",
        title: "楽天のインターンに参加",
        content: `
          楽天の二子玉川 夏の陣2020というインターン(2週間)に参加しました. 
          お題に沿ってアプリの案出しからプロトタイプの実装までを学生でチームを作って取り組むという内容でした. 
          フロントエンドのリーダーとして、React + Reduxを用いたフロントの環境構築から実装までを担当しました. 
          REST APIとかReduxとかJWTとかモックサーバーとか初めて触れるものばかりでしたが, 
          何とか最終発表までに実装出来ました. 
        `,
        link: "https://github.com/shortintern2020-B-frontier/TeamB",
        link_text: "ソースコード(Github)",
        img_link: "./images/TheaTalk.png",
        img_alt: "TheaTalkのメインページのイメージ",
    },
    {
        date: "2020/9",
        title: "オプティムの夏季インターンに参加",
        content: `
          オプティムのインターン(2週間)に参加しました. 
          内容は実務開発で、Vue.js + Typescriptを用いたフロントエンドの開発に携わりました. 
          とても楽しかったです(脳死).
        `,
    },
    {
        date: "2020/9",
        title: "非公式ファンサイト制作",
        content: `
          私が良く観てるVtuberの非公式ファンサイトを勝手に作りました. 
          Next.js + TypeScript + Vercelを使って実装してます. 
          Atomic Componentsの概念の導入やレスポンシブデザイン対応など色々苦労しました. 
          現在リファクタリングしてます.
        `,
        link: "https://github.com/ruritoBlogger/Sanbaka_1.5_fan_site",
        link_text: "ソースコード(Github)",
        img_link: "./images/fansite.png",
        img_alt: "ファンサイトのトップページのイメージ",
    },
    {
        date: "2021/5",
        title: "ポートフォリオ制作",
        content: `
          GW中暇だったので作りました. 
          Next.js(SSG) + Typescript + Firebaseで作ってます. 
          何気に初めてNext.js使いました(使いやすい). 
          GitHub Actionsと連携させてmasterに対するPRが発行されると, 
          仮ドメインへのデプロイやマージされると自動デプロイなど設定してました.
        `,
        link: "https://github.com/ruritoBlogger/ruritoBlogger.github.io",
        link_text: "ソースコード(Github)",
        img_link: "./images/portfolio.png",
        img_alt: "ポートフォリオのイメージ",
    },
    {
        date: "2021/9",
        title: "アニメーションライブラリーを制作(中)",
        content: `
          GSAPを用いたアニメーションを簡単に使いたいなという気持ちから制作を開始しました。
          このサイトのLoading中のアニメーションとかもこのライブラリーのやつを使ってます(多分)
        `,
        link: "https://github.com/ruritoBlogger/gsap-animation-library",
        link_text: "ソースコード(Github)",
        img_link: "./images/sampleAnimation.gif",
        img_alt: "アニメーションのサンプル",
    },
]