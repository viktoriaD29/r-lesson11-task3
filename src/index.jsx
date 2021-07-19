import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Expand from './Expand';

const rootElement = document.querySelector("#root");

const elem = (
  <p>
    Hooks are a new addition in React 16.8. They let you use state and other
    React features without writing a class.
  </p>
);

ReactDOM.render(<Expand title="Some title" elem={elem}/>, rootElement);