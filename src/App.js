import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import me from './me.jpg';

function User(props){
  //type and id
  let url = 'https://';
  if(props.type==="vk") url+=`vk.com/${props.id}`;
  else if(props.type==="fb") url+=`fb.com/profile.php?id=${props.id}`;
  else if(props.type==="github") url+=`github.com/${props.id}`;
  else if(props.type==="gitlab") url+=`gitlab.com/${props.id}`;
  else if(props.type==="habr") url+=`habr.com/ru/ids/${props.id}`;
  else if(props.type==="stack") url+=`stackoverflow.com/users/8531190/${props.id}`;
  return (
    <a href={url}>{props.type}</a>
  );
}
function MenuItem(props){
  return (
    <>
      <a href={"#"+props.text}>{props.text}</a> &nbsp;
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
      <img id="me" src={me} alt="Marat Nagayev" />
      <div id="about">
        <p>Hello! I'm Marat Nagayev, frontend developer.</p>
        <p>Original from Penza, Russia</p>
        <p>Education: 2 Lyceum of Modern Technologyies, Penza</p>
        <p>Love JavaScript, NodeJS and Golang.</p>
      </div>
      <div id="projects">
        <Projects />
        <br />
      </div>
      <div id="contacts">
        <h2>Contacts</h2>
        <p>Social networks: <User type="vk" id="bestvkhacker" /> <User type="fb" id="100010223490380" /> <User type="habr" id="enmar" /></p>
        <p>Developer's Sites: <User type="github" id="nagayev" /> <User type="gitlab" id="nagayev" /> &nbsp;
        <User type="stack" id="marat-nagayev" /></p>
      </div>
      
      <div id="bottom">
      nagayev.ru, 2019 <br />
      Licensed under MIT License <br />
      Source code are available <a href="https://github.com/nagayev/webUser">here</a>
      </div>
    </div>
  );
}
export default App;
