const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[ 
        React.createElement("h1",{},"i'm an h1 tag"),
        React.createElement("h2",{},"i'm an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[ 
        React.createElement("h1",{},"i'm an h1 tag"),
        React.createElement("h2",{},"i'm an h2 tag"),
    ])
]);
console.log(parent);
const root1 = ReactDOM.createRoot(document.getElementById("root")).render(parent);        


// const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"Hello world from react");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root")).render(heading);
// root.render(heading);


// NOTE :-
// {} is used to write attributes of the tags where we mention inside the paranthesis after declaring the tags inside of createElement().
// This 'React.createElement' means it's not going to create html tag, it is react element(javaScript object).
// This react element becomes html that browser understand, 
// while it is rendering onto the DOM it converts itself into that html and puts it up into the DOM.
// If we want to add more than one child to the parent element then we can use array to add the child.