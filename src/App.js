import Header from './Header';
import Body from './Body';
import './App.css';
import {
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Body/>
      
      </header>
    </div>
  );
}

export default App;
