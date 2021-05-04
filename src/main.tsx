import styles from "./main.styl";

import Intro from "./pages/intro/index";
import Profile from "./pages/profile/index";
import Skill from "./pages/skill";
import Timeline from "./pages/timeline";
import Tmp from "./tmp";

const Main: React.FC = () => {
  return (
    <div>
      <Intro />
      <Profile />
      <Tmp />
      {/*
      <Skill />
      <Timeline />
      */}
    </div>
  );
};

export default Main;
