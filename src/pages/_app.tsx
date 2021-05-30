import "./_app.sass";

import Intro from "./intro/index";
import Profile from "./profile/index";
import Skill from "./skill/index";
import History from "./history/index";
import Timeline from "./timeline/index";
import Copyright from "../components/copyright/index";

const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <Profile />
      <History />
      <Skill />
      <Timeline />
      <Copyright />
    </div>
  );
};

export default Home;