import React from 'react';
import AwesomeSlider from '../node_modules/react-awesome-slider';
import '../node_modules/react-awesome-slider/dist/styles.css';

function Projects(){
  const [color,setColor] = React.useState('aqua');
  const colors = ['aqua','lightgreen','rgb(255,38,67)'];
  function handler(e){
    setColor(colors[e.currentIndex]);
  }
  function openGithub(project){
    window.open(`https://github.com/nagayev/${project}`);
  }
  return (
    <>
    <h2 style={{color:color}}>Projects</h2>
    <AwesomeSlider className="slider" onTransitionEnd={handler}> 
      <div id="slideCalculator" onClick={()=>openGithub('wasm')}>
      <h1 className="header">Webassembly calculator</h1>
      Calculator, written in WASM with support of Posit Numbers.
      </div>
      <div id="slideEcology" onClick={()=>openGithub('ecology')}>
      <h1 className="header">Ecology game</h1>
      Ecology game with eco map and lots of fun!
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