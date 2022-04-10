import { IntroTemplate, ProfileTemplate, HistoryTemplate, SkillTemplate, TimelineTemplate } from "../templates"
import { LoadingAnimation, Copyright } from "../components/";

const Home: React.FC = () => {
  return (
    <LoadingAnimation>
      <IntroTemplate />
      <ProfileTemplate />
      <HistoryTemplate />
      <SkillTemplate />
      <TimelineTemplate />
      <Copyright />
    </LoadingAnimation>
  );
};

export default Home;
