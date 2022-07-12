import logo from './Dragon9.png';
import openSeaLight from './OpenSea_Full_Logo_light.svg';
import openSeaDark from './OpenSea_Full_Logo_dark.svg';
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
      
        <div class="container">
        
          <div class="row align-items-center">
            <div class="col">
              <h1 class="diplomaticDragonHeading">
                Diplomatic Dragon
              </h1>
            </div>
          </div>
          
          <div class="row align-items-center">
            <div class="col">              
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div class="col dragonStory">              
              <h2 class="dragonStoryLine">
                Generally dragons are very fierce, but we, NFT Dragons are peaceful, cute and want to live with human on earth.
              </h2>          
              <br/>
              <h2>
                Here is the first dragon of this community. 
              </h2>
              <h2>
                ✌ Peace ✌
              </h2>
              <br/>
              <br/>
              <h2 class="comingSoon">
                Diplomtic Dragons are on their way to Earth!!!
              </h2>
            </div>
          </div>
        
        <div class="row align-items-center">
            <h3 class="socialLine">
              Ride Dragons on Social
            </h3>
            <div class="col-4"/>              
            <div class="col-1">              
            <a href="https://twitter.com/DiplomatDragon" className="twitter social twitterlocal">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            </div>
            
            <div class="col-1">              
            <a href="https://www.instagram.com/diplomaticdragon/"
              className="instagram social instagramlocal">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </div>
            
            <div class="col-1">              
            <a href="https://opensea.io/collection/diplomaticdragon">
              <img src={openSeaDark} class="opensea"/>                
            </a>
          </div>
          <div class="col-4"/>              
        </div>
        
        </div>
      
      </header>
    </div>
  );
}

export default App;
