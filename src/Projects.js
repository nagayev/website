import React from "react";
import ReactCardFlip from "react-card-flip";

import Slider from "./Slider";
import Tiles from "./Tiles";

function Projects() {
  /*
  const [color,setColor] = React.useState('aqua');
  const colors = ['aqua','lightgreen','rgb(255,38,67)'];
  function handler(e){
    setColor(colors[e.currentIndex]);
  } */
  const [tag, setTag] = React.useState(<Slider />); //0 is personal, 1 is ach
  const [isFlipped, setFlip] = React.useState(false);
  //const styles = {backgroundColor:color};
  //const tag = (!active)?Slider:Tiles;
  const t = () => setFlip(!isFlipped);
  const deactivateProjects = () => {
    setTag(<Tiles />);
    t();
  };
  const deactivateAchivments = () => {
    setTag(<Slider />);
    t();
  };
  return (
    <>
      <br />
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <h2 style={{ color: "white" }} onClick={deactivateProjects}>
          Personal Projects
        </h2>
        <h2 onClick={deactivateAchivments}>Achivments</h2>
      </ReactCardFlip>
      {tag}
    </>
  );
}
export default Projects;
