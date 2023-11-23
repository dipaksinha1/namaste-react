import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// const reactElement=<div>React element</div>

const ReactComp = () => <div>I am react element</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

const ReactComponent = () => (
  <>
    <ReactComp />
    <h1>React Component</h1>
  </>
);

root.render(<ReactComponent />);
