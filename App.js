// const heading = React.createElement("h1", { id : "heading", xyz : "krunal" }, "Hello World from React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement("div", {id:"parent"},[
React.createElement ("div", {id:"child"},[
 React.createElement ("h1", {id:"title", class:"heading"}, "I'm an H1 bunty")
]),

 React.createElement ("div", {id:"child2"},[
 React.createElement ("h1", {id:"title", class:"heading"}, "I'm an H1 bunty"),
]),
]);
 console.log(parent);

 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
