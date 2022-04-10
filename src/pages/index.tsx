import { IntroTemplate, ProfileTemplate, HistoryTemplate, SkillTemplate, TimelineTemplate } from "../templates"
import { LoadingAnimation, Copyright } from "../components/";
import { TimelineDatas } from "../datas"

const Home: React.FC = () => {
  return (
    <LoadingAnimation>
      <IntroTemplate />
      <ProfileTemplate />
      <HistoryTemplate />
      <SkillTemplate />
      <TimelineTemplate datas={TimelineDatas} />
      <Copyright />
    </LoadingAnimation>
  );
};

export default Home;
