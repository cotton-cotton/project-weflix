import logo from './logo.svg';
import './App.css';
import UserStore from './store/UserStore';
import UserProfile from './pages/UserProfile/UserProfile';
import ProfileBox from './components/ProfileBox/ProfileBox';
import AddProfile from './pages/AddProfile/AddProfile';

function App() {
  return (
    <AddProfile>
      <div className="App">
        <header className="App-header">
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
      </div>
    </AddProfile>
  );
}

export default App;
