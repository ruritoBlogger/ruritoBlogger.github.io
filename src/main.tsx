import styles from "./main.styl";

import Intro from "./pages/intro/index";
import Profile from "./pages/profile/index";
import Skill from "./pages/skill/index";
import History from "./pages/history/index";
import Timeline from "./pages/timeline/index";
import Tmp from "./tmp";

const Main: React.FC = () => {
  return (
    <div>
      <Intro />
      <Profile />
      <History />
      <Skill />
      <Timeline />
      <Tmp />
    </div>
  );
};

export default Main;
