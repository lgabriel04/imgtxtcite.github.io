import './App.css';
import Select from './select.js';
import ImageDisplay from './display.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className='footer'>
      Made by: Lance Gabriel Alcantara  © 2023
      <br />
      Contact info: 
      <a href='mailto:llalcantara@addu.edu.ph'>
        <FontAwesomeIcon icon={faEnvelope} /> llalcantara@addu.edu.ph
      </a>
      {' '}
      <a href='tel:+639665741887'>
        <FontAwesomeIcon icon={faPhone} /> 09665741887
      </a>
    </footer>
  );
}


function App() {
  return (
    <div className="App">
      <h1 className='naknam'>
        <FontAwesomeIcon icon={faImage} />ImgTxt
      </h1>
      <p className='naknam'> Covert an image into text form </p>
      <Select />
      <ImageDisplay />
      <Footer />
    </div>
  );
}

export default App;
