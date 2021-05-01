import ReactDOM from 'react-dom';

const App: React.FC = () => <div><h1>hello world</h1></div>;

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
