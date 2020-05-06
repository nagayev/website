import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import dark from './dark';
import light from './light'; //FIXME: experimental
import Projects from './Projects';
import me from './me.jpg';

function getCurrentTheme(){
  return dark;
}
function User(props){
  //type and id
  const style = getCurrentTheme();
  let url = 'https://';
  if(props.type==="vk") url+=`vk.com/${props.id}`;
  else if(props.type==="fb") url+=`fb.com/profile.php?id=${props.id}`;
  else if(props.type==="github") url+=`github.com/${props.id}`;
  else if(props.type==="gitlab") url+=`gitlab.com/${props.id}`;
  else if(props.type==="habr") url+=`habr.com/ru/ids/${props.id}`;
  else if(props.type==="stack") url+=`stackoverflow.com/users/8531190/${props.id}`;
  return (
    <a style={style.a} href={url}>{props.type}</a>
  );
}
function App() {
  const style = getCurrentTheme();
  //const language = navigator.language.slice(0,2); //use it i the future
  /*
  const [theme,setTheme] = React.useState('dark')
  if(theme==="dark") console.log('dark');
  else if(theme==="classic") console.log('classic') */
  return (
    <div className="App" style={style.app}>
      <div style={style.languages}>
        <a style={style.dots} href="#">en</a> <a style={style.dots} href="#">ru</a>
      </div>
      <h1>Marat Nagayev</h1>
        <img id="me" src={me} alt="Marat Nagayev" style={style.me} />
      <div id="about" style={style.about}>
        <p>Hello! I'm Marat Nagayev, frontend developer.</p>
        <p>Original from Penza, Russia</p>
        <p>Education: 2 Lyceum of Modern Technologyies, Penza</p>
        <p>Love JavaScript, NodeJS and Golang.</p>
      </div><br />
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
      nagayev.ru, 2019-2020 <br />
      Source code are available <a style={style.a} href="https://github.com/nagayev/website">here</a>
      </div>
    </div>
  );
}
export default App;
