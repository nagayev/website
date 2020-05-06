import React from 'react';
import Slider from './Slider';
import Tiles from './Tiles';

function Projects(){
  /*
  const [color,setColor] = React.useState('aqua');
  const colors = ['aqua','lightgreen','rgb(255,38,67)'];
  function handler(e){
    setColor(colors[e.currentIndex]);
  } */
  const [tag,setTag] = React.useState(<Slider />); //0 is personal, 1 is ach
  //const styles = {backgroundColor:color};
  //const tag = (!active)?Slider:Tiles;
  const activateProjects = () => setTag(<Slider />);
  const activateAchivments = () => setTag(<Tiles />);
  return (
    <>
    <br />
    <h2 style={{color:'white'}} onClick={activateProjects}>Personal Projects</h2> 
    <h2 onClick={activateAchivments}>Achivments</h2>
    {tag}
    </>
  );
}
export default Projects;