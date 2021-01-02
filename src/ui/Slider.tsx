import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoPlayer = withAutoplay(AwesomeSlider);
import dark from "./dark";
//import Tiles from "./Tiles";

const openGithub = (project: string) => {
  window.open(`https://github.com/nagayev/${project}`);
};

function Slide(props) {
  const style = dark;
  const { data } = props;
  return (
    <div style={style.calculator} onClick={() => openGithub(data.name)}>
      <h1 className="header">{data.header}</h1>
      {data.content}
    </div>
  );
}
function Loading() {
  return <p>Loading...</p>;
}
function Slider() {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    fetch("projects.json")
      .then((data) => data.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {projects.length !== 0 ? (
        <AutoPlayer
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={10000}
        >
          {projects.map((item, i) => {
            return (
              <div key={i}>
                <Slide data={item} />
              </div>
            );
          })}
        </AutoPlayer>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Slider;
