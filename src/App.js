import logo from './logo.svg';
import './App.css';
import { Home } from './home/home';
import AllRoutes from './home/routes';
import { MailtrapPage } from './mailtrap/mailtrap';
import { Allmailtraprout } from './mailtrap/mailrout';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
       {/* <Home/> */}
       {/* <MailtrapPage/> */}
       {/* <Allmailtraprout/> */}
       <AllRoutes/>
    </div>
  );
}

export default App;
