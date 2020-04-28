import React from 'react';
import AwesomeSlider from '../node_modules/react-awesome-slider';
import '../node_modules/react-awesome-slider/dist/styles.css';

function Projects(){
  /*
  const [color,setColor] = React.useState('black');
  const colors = ['aqua','lightgreen','rgb(255,38,67)'];
  function handler(e){
    //setColor(colors[e.currentIndex]);
  } */
  function openGithub(project){
    window.open(`https://github.com/nagayev/${project}`);
  }
  const styles = {backgroundColor:'black'};
  return (
    <>
    <h2 style={{color:'white'}}>Projects</h2>
    <AwesomeSlider style={styles} className="slider" /*onTransitionEnd={handler}*/ > 
      <div id="slideCalculator" onClick={()=>openGithub('wasm')}>
      <h1 className="header">Webassembly calculator</h1>
      Calculator, written in WASM with support of Posit Numbers.
      </div>
      <div id="slideEcology" onClick={()=>openGithub('arduino-emulator')}>
      <h1 className="header">Arduino Emulator</h1>
      Online Arduino's Emulator
      From mini to UNO!
      </div>
      <div id="slideCoderbook" onClick={()=>openGithub('coderbook')}>
      <h1 className="header">Coderbook</h1>
      I'm coauthor of Coder book - tutorial for coders.
      This app provides cources about programming languages. 
      </div>
    </AwesomeSlider>
    </>
  );
}
export default Projects;