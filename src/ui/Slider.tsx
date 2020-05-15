import React from "react";
import AwesomeSlider from "react-awesome-slider";

import dark from "./dark";

const openGithub = (project: string) => {
  window.open(`https://github.com/nagayev/${project}`);
};

const Slider: React.FunctionComponent = () => {
  const style = dark;
  return (
    <AwesomeSlider className="slider" /*onTransitionEnd={handler} */>
      <div style={style.calculator} onClick={() => openGithub("wasm")}>
        <h1 className="header">Webassembly calculator</h1>
        Calculator, written in WASM with support of Posit Numbers.
      </div>
      <div style={style.arduino} onClick={() => openGithub("arduino-emulator")}>
        <h1 className="header">Arduino Emulator</h1>
        Online Arduino’s Emulator <br />
        From mini to UNO!
      </div>
      <div style={style.coderbook} onClick={() => openGithub("coderbook")}>
        <h1 className="header">Coderbook</h1>
        I’m coauthor of Coder book - tutorial for coders. <br />
        This app provides courses about programming languages.
      </div>
    </AwesomeSlider>
  );
};

export default Slider;
