import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Slider from './Slider';
import me from './me.jpg';

function SocialNetwork(props){
  //type and user
  let url = 'https://';
  if(props.type==="vk") url+=`vk.com/${props.user}`;
  else if(props.type==="fb") url+=`fb.com/profile.php?id=${props.user}`;
  else if(props.type==="github") url+=`github.com/${props.user}`;
  else if(props.type==="gitlab") url+=`gitlab.com/${props.user}`;
  return (
    <a href={url}>{props.type}</a>
  );
}
function MenuItem(props){
  return (
    <>
      <a class="link" href={"#"+props.text}>{props.text}</a> &nbsp;
    </>    
  );
}
function App() {
  //const language = navigator.language.slice(0,2); //use it i the future
  return (
    <div className="App">
      <div id="wrapper">
      <div id="topMenu">
        <MenuItem text="about" />
        <MenuItem text="projects" /> 
        <MenuItem text="contacts" /> <br />
      </div>
      </div>
      <h1>Marat Nagayev</h1>
      <img id="me" src={me} alt="" />
      <div id="about">
        <p>Hello! I'm Marat Nagayev, frontend developer.</p>
        <p>Original from Penza, Russia</p>
        <p>Education: 2 Lyceum of Modern Technologyies, Penza</p>
      </div>
      <h2 id="projects">Projects</h2>
      <Slider />
      <br />
      <h2 id="contacts">Contacts</h2>
      <p>Social networks: <SocialNetwork type="vk" user="bestvkhacker" /> <SocialNetwork type="fb" user="100010223490380" /></p>
      <p>Developer's sites: <SocialNetwork type="github" user="nagayev" /> <SocialNetwork type="gitlab" user="nagayev" /></p>
    </div>
  );
}
export default App;
