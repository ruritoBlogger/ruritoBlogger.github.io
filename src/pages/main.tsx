import styles from "./main.styl";

import Intro from "./intro/index";
import Profile from "./profile/index";
import Skill from "./skill/index";
import History from "./history/index";
import Timeline from "./timeline/index";
import Copyright from "../components/copyright/index";

const Main: React.FC = () => {
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

export default Main;
