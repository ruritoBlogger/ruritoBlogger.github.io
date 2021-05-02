import ReactDOM from "react-dom";

import Main from "./main";
// import Tmp from "./tmp";
import "./index.styl";

const App: React.FC = () => <Main />;
// const App: React.FC = () => <Tmp />;

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
