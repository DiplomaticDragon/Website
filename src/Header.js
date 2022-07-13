import dragonImage from './Dragon9.png';
import logo from './Logo_512_4.png';
import openSeaDark from './OpenSea_Full_Logo_dark.svg';
import './Header.css';
import './App.css';
import {
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    
        <div class="d-flex justify-content-between align-items-center w-full md:p-6 p-3">
          
          <div id="logoDiv" class="d-flex align-items-center">
          <a href="/" class="text-inherit">
            <img src={logo} className="logo justify-content-start d-none d-md-block d-xl-block d-lg-block" alt="logo"/>
          </a>
            <a href="/" class="diplomaticDragonHeading text-inherit pt-1">
              Diplomatic Dragon
            </a>
          </div>
          
          <div class="d-flex md:flex-wrap justify-content-evenly align-items-center md:text-2xl text-l">    
          <div class="auth justify-content-center align-items-center d-none d-sm-block">
            <a href="https://twitter.com/DiplomatDragon" 
              className="text-inherit twitter social twitterlocal mx-4">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          
            <a href="https://www.instagram.com/diplomaticdragon/"
               className="text-inherit instagram social instagramlocal mx-4">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </div>
          </div>

        </div>        
  );
}

export default App;
