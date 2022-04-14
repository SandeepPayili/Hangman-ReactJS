import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app";

// Components as functions

// function HelloWorld(){
//     return <h1>Hello World!</h1>; // JSX = JavaScript + XML
// }


// ReactDOM.render(
//     <p>Hello ReactJS</p>,
//     document.getElementById("root")  
// );


// ReactDOM.render(
//     <HelloWorld/>,
//     document.getElementById("root")  
// );

// function HelloWorld2(props)
// {
//     return <h1>{props.name}!</h1>;
// }

// function HelloWorld2({name})
// {
//     return <h1>{name}!</h1>;
// }

// ReactDOM.render(
//     <HelloWorld2 name="Dhoni Payili"/>,
//     document.getElementById("root")
// );


// error because of we can't return two components so we need to wrap it in single div component
// function App(){
//     return <h1>Welcome to Hangman !</h1>
//     <p>Do you want to play a game?</p>; 
// }

// returns nothing 
// function App(){
//     return 
//     <div>
//         <h1>Welcome to Hangman !</h1>
//     <p>Do you want to play a game?</p>
//     </div>; 
// }


ReactDOM.render(
    <App />,
    document.getElementById("root")
);