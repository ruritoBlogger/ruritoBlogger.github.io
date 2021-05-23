import ReactDOM from "react-dom";

import Main from "./main";
import "./index.styl";

const App: React.FC = () => <Main />;

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
