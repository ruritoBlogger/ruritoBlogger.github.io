import Intro from "./intro/index";
import Profile from "./profile/index";
import Skill from "./skill/index";
import History from "./history/index";
import Timeline from "./timeline/index";
import Copyright from "../components/copyright/index";
import { LoadingAnimation } from "../components/";

const Home: React.FC = () => {
  return (
    <LoadingAnimation>
      <Intro />
      <Profile />
      <History />
      <Skill />
      <Timeline />
      <Copyright />
    </LoadingAnimation>
  );
};

export default Home;
