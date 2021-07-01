import './styles/App.css';


import Header from "./componants/Header"
import SlideOne from "./componants/SlideOne"
import SlideTwo from "./componants/SlideTwo"

import ReactDOM from 'react-dom';




import Zoom from 'react-reveal/Zoom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <div className="App">

      <Header />

      <SlideOne />

      

    </div>
  );
}

export default App;