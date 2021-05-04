import styles from "./main.styl";

import Intro from "./pages/intro/index";
import Profile from "./pages/profile/index";
import Skill from "./pages/skill/index";
import Timeline from "./pages/timeline";
import Tmp from "./tmp";

const Main: React.FC = () => {
  return (
    <div>
      <Intro />
      <Profile />
      <Skill />
      <Tmp />
      {/*
      <Timeline />
      */}
    </div>
  );
};

export default Main;
