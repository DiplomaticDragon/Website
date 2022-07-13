import Header from './Header';
import './App.css';
import './Body.css';
import dragonImage from './Dragon9.png';
import openSeaDark from './OpenSea_Full_Logo_dark.svg';
import {
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
      <div class="container">
          
        <div class="row align-items-center mt-2">
            
            <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6 dragonStory my-5">    
              <h1 class="welcomeDragon">
                Welcome to the world of Dragons
              </h1>           
              <h2 class="dragonStoryLine my-5">
                Generally dragons are very fierce, but we, NFT Dragons are peaceful, cute and want to live with human on earth.
              </h2>   
              
              <h2 class="dragonStoryLine my-2">
                We are going to build our own community. 
                Here is the first member of <b>Diplomatic Dragon</b> community. 
              </h2>    
                        
              <h2 class="comingSoon my-5">
                Diplomatic Dragons are on their way to Earth!!!
              </h2>
              
            </div>
            
            <div class="col-sm-12 col-md-12 col-xl-6 col-lg-6">              
              <img src={dragonImage} className="App-dragonImage" alt="logo" />
            </div>
            
        </div>
        
          <div class="row align-items-center mx-5">
            <h2 class="socialLine mb-4">
              Follow Dragons on social and lucky 100 people will get a free dragon before public launch.
            </h2>
          </div>
          
          <div class="row align-items-center pb-5">
              <a href="https://opensea.io/collection/diplomaticdragon">
                <img src={openSeaDark} class="opensea" alt="logo"/>                
              </a>
          </div>
      </div>
  );
}

export default App;
