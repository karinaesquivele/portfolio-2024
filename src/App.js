//import logo from './logo.svg';
import './App.css';
import './styles/global.scss'
import MainLayout from './components/templates/MainLaout';

function App() {
  return (
    <div className="App">
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <p>aaa</p>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <MainLayout/>
    </div>
  );
}

export default App;