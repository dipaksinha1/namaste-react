import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>hello one line</h1>;

const heading=React.createElement('div',{className:"h1"},"Hi heading")

console.log(jsxHeading);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);