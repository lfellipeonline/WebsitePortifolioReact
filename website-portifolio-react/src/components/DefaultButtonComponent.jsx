import React from "react";

const DefaultButtonComponent = (props) => (
  <div>
    <button className="default-button" onClick={props.onClick}>{props.text}</button>
  </div>
);

export default DefaultButtonComponent;
