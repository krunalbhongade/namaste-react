// const heading = React.createElement("h1", { id : "heading", xyz : "krunal" }, "Hello World from React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


import React from "react";
import ReactDOM from "react-dom/client";

const elem =  <span>Banty</span>

const Title = () => (
   
    <h1 className="head">
     {elem}
    Namaste React</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Welcome</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

