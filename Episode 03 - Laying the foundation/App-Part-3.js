import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const reactElement1 = <div>React element 1</div>;
const reactElement2 = (
  <>
    {reactElement1}
    <div>React element 2</div>
  </>
);

const FunctionComponent1=()=>{
return (<div>Function componenet 1</div>)
}

const FunctionComponent2=()=>{
return (
  <div>
    <FunctionComponent1/>
    <FunctionComponent1></FunctionComponent1>
    {FunctionComponent1()}
    {reactElement2}
    Function Component 2
  </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionComponent2/>);