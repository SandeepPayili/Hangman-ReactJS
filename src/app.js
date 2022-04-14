import { useState } from "react";

import GameBoard from "./game-board";
import "./app.css";

import WordSelect from "./word-select";

export default function App(){
    const [secretWord,setSecretWord] = useState("");

    return (
        <div className="app-container">
            <h1>Welcome to Hangman !</h1>
            <p>Do you want to play a game?</p>
            <h2>Let's Play</h2>
            <div>
                <WordSelect
                   isShown = {!secretWord} 
                   wordSelected = {val => setSecretWord(val)}
                 />
                <GameBoard 
                    secretword={secretWord}
                    maxErrors = {6}
                    isShown = {secretWord} // secretWord as truthy or falsy
                />
            </div>
        </div>
    ); 
}