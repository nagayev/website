import React from "react";
import AwesomeSlider from "../node_modules/react-awesome-slider";
import "../node_modules/react-awesome-slider/dist/styles.css";
import dark from "./dark";

function Projects() {
  /*
  const [color,setColor] = React.useState('aqua');
  const colors = ['aqua','lightgreen','rgb(255,38,67)'];
  function handler(e){
    setColor(colors[e.currentIndex]);
  } */
  const style = dark;
  function openGithub(project) {
    window.open(`https://github.com/nagayev/${project}`);
  }
  //const styles = {backgroundColor:color};
  return (
    <>
      <br />
      <h1 style={{ color: "white" }}>Projects</h1>
      <AwesomeSlider className="slider" /*onTransitionEnd={handler} */>
        <div style={style.calculator} onClick={() => openGithub("wasm")}>
          <h1 className="header">Webassembly calculator</h1>
          Calculator, written in WASM with support of Posit Numbers.
        </div>
        <div
          style={style.arduino}
          onClick={() => openGithub("arduino-emulator")}
        >
          <h1 className="header">Arduino Emulator</h1>
          Online Arduino's Emulator <br />
          From mini to UNO!
        </div>
        <div style={style.coderbook} onClick={() => openGithub("coderbook")}>
          <h1 className="header">Coderbook</h1>
          I'm coauthor of Coder book - tutorial for coders. <br />
          This app provides cources about programming languages.
        </div>
      </AwesomeSlider>
    </>
  );
}
export default Projects;
