import styles from "./main.styl";

import Intro from "./pages/intro";
import Profile from "./pages/profile";
import Skill from "./pages/skill";
import Timeline from "./pages/timeline";

const Main: React.FC = () => {
  return (
    <div>
      <Intro />
      <Profile />
      <Skill />
      <Timeline />
    </div>
  );
};

export default Main;
