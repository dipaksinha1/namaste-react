// const heading = React.createElement(
//   "h1",
//   {
//     style: { color: "orange", "background-color": "blue" },
//     id: "dk",
//     xyz: "asaasa",
//   },
//   "Hello world from React"
// );

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { class: "child1" }, [
    React.createElement("h1", { class: "sibling1" }, "Hi h1"),
    React.createElement("h1", { class: "sibling2" }, "Hi h1"),
  ]),
  React.createElement("div", { class: "child2" }, [
    React.createElement("h2", { class: "sibling1" }, "Hi h2"),
    React.createElement("h2", { class: "sibling2" }, "Hi h2"),
  ]),
  React.createElement("div", { class: "child3" }, [
    React.createElement("h3", { class: "sibling1" }, "Hi h3"),
    React.createElement("h3", { class: "sibling2" }, "Hi h3"),
  ]),
]);

console.log("React Element", heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// React is just a library which imported and used anywhere the code. Additionally, It can be used in any webapp as you just need to import and write library function of react

//To run build command ,remove "main":"index.js" from package.json
