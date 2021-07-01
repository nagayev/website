import { CSSProperties } from "react";

const me: CSSProperties = {
  marginRight: "20%",
  width: "100px",
  height: "100px",
  float: "right",
  WebkitFilter: "grayscale(100%)",
  msFilter: "grayscale(100%)",
  filter: "grayscale(100%)",
};
const about: CSSProperties = {
  textAlign: "left",
  marginLeft: "30%",
};
const a = {
  //textDecoration: 'none',
  color: "white",
};
const pageLayout: CSSProperties = {
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  fontFamily: "Montserrat",
};
const languages: CSSProperties = {
  float: "right",
  marginRight: "5%",
  display: "none", //FIXME: it's temporary
};
const dots: CSSProperties = {
  textDecoration: "underline",
  color: "white",
};
const dark = {
  a,
  about,
  pageLayout,
  me,
  languages,
  dots,
};
export default dark;
