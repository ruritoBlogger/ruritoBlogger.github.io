import { IntroTemplate, ProfileTemplate, HistoryTemplate, SkillTemplate, TimelineTemplate } from "../templates"
import { LoadingAnimation, Copyright } from "@/src/components/";
import { TimelineDatas, HistoryDatas, SkillDatas } from "@/src/datas"

const Home: React.FC = () => {
  return (
    <LoadingAnimation>
      <IntroTemplate />
      <ProfileTemplate />
      <HistoryTemplate datas={HistoryDatas} />
      <SkillTemplate datas={SkillDatas} />
      <TimelineTemplate datas={TimelineDatas} />
      <Copyright />
    </LoadingAnimation>
  );
};

export default Home;
