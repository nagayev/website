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
      Calculator, written in WASM with support of Posit Numbers.
      </div>
      <div id="slide">
      <h1 className="header">Ecology game</h1>
      Ecology game with eco map and lots of fun!
      </div>
      <div id="slide">
      <h1 className="header">Coderbook</h1>
      I'm coauthor of Coder book - tutorial for coders.
      This app provides cources about programming languages. 
      </div>
    </AwesomeSlider>
  );
}
export default Slider;