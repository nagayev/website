import React from 'react';
import AwesomeSlider from '../node_modules/react-awesome-slider';
import '../node_modules/react-awesome-slider/dist/styles.css';
function Slider(){
    const [slide,setSlide] = React.useState(0);
    /*
    React.useEffect(()=>{
      document.onkeypress(e=>{
        if(e.)
      });
    }); */
  return (
    <AwesomeSlider className="slider" selected={slide}> 
      <div id="slide">
      <h1 className="header">Webassembly calculator</h1>
      Calculator, written in WASM.
      </div>
      <div id="slide">
      <h1 className="header">Ecology app</h1>
      Ecology map
      </div>
      <div id="slide">
      <h1 className="header">This website</h1>
      Using react, next.js & zeit.co
      </div>
    </AwesomeSlider>
  );
}
export default Slider;