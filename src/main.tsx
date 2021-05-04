import styles from "./main.styl";

import Intro from "./pages/intro";
import Profile from "./pages/profile";
import Skill from "./pages/skill";
import Timeline from "./pages/timeline";
import Tmp from "./tmp";

const Main: React.FC = () => {
  return (
    <div>
      <Intro />
      <Tmp />
      {/*
      <Profile />
      <Skill />
      <Timeline />
      */}
    </div>
  );
};

export default Main;
