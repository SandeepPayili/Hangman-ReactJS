import { useState } from "react";

export default function({value,onClick}){
    const [isClicked,setIsClicked] = useState(false);

    let className = 'button';

    if(isClicked){
        className += ' guessed';
    }

    function clickHandler(){
        setIsClicked(true);
        onClick(value);
    }

    // console.log("button");

    return (
        <button 
            className = {className} 
            onClick = {clickHandler} // onClick != onclick
        > 
            {value}
        </button>
    );
}