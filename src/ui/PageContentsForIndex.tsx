import { NextPage } from "next";
import React from "react";

import dark from "./dark";
import me from "./me.jpg";
import Projects from "./Projects";

const getCurrentTheme = () => {
  return dark;
};

type UserType =
  | "vk"
  | "fb"
  | "habr"
  | "gitlab"
  | "github"
  | "stack"
  | "inst"
  | "tg";

interface UserProps {
  type: UserType;
  id: string;
}

const User: React.FunctionComponent<UserProps> = (props) => {
  //type and id
  const style = getCurrentTheme();
  const contacts = {
    vk: `vk.com/${props.id}`,
    fb: `fb.com/${props.id}`,
    github: `github.com/${props.id}`,
    gitlab: `gitlab.com/${props.id}`,
    habr: `habr.com/users/${props.id}`,
    stack: `stackoverflow.com/users/8531190/${props.id}`,
    inst: `instagram.com/${props.id}`,
    tg: `telegram.me/${props.id}`,
  };
  const url = `https://${contacts[props.type]}`;

  return (
    <a style={style.a} href={url}>
      {props.type}
    </a>
  );
};

const PageContentsForIndex: NextPage = () => {
  const style = dark;
  return (
    <div style={style.pageLayout}>
      <div style={style.languages}>
        <a style={style.dots} href="#">
          en
        </a>{" "}
        <a style={style.dots} href="#">
          ru
        </a>
      </div>
      <h1>Marat Nagayev</h1>
      <img id="me" src={me} alt="Marat Nagayev" style={style.me} />
      <div id="about" style={style.about}>
        <p>Hello! I’m Marat Nagayev, fullstack developer.</p>
        <p>Originally from Penza, Russia</p>
        <p>Moved to Moscow, Russia</p>
        <p>Education: Moscow Polytech</p>
        <p>Love JavaScript, NodeJS and TypeScript.</p>
      </div>
      <br />
      <div id="projects">
        <Projects />
        <br />
      </div>
      <div id="contacts">
        <h2>Contacts</h2>
        <p>
          Contact me: <User type="vk" id="m_nagayev" />{" "}
          <User type="inst" id="m_nagayev" /> <User type="habr" id="nagayev" />{" "}
          <User type="tg" id="nagayev" />
        </p>
        <p>
          My activity as a developer: <User type="github" id="nagayev" />{" "}
          <User type="gitlab" id="nagayev" /> &nbsp;
          <User type="stack" id="marat-nagayev" />
        </p>
      </div>

      <div id="bottom">
        nagayev.ru, 2019-2022 <br />
        Source code is available{" "}
        <a style={style.a} href="https://github.com/nagayev/website">
          here
        </a>
      </div>
    </div>
  );
};

export default PageContentsForIndex;
