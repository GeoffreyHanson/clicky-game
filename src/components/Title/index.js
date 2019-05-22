import React from "react";
import "./style.css";

// Simple title component.
function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Title;
