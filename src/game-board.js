import { useState } from "react";
import LetterGrid from "./letter-grid";
import ButtonGrid from "./button-grid";
import GameResult from "./game-result";
export default function GameBoard({secretword,maxErrors,isShown}){
    const [guessedLetters,setGuessedLetters] = useState([]);
    const [errorCount,setErrorCount] = useState(0);

    const letterGuessedHandler = function(letter){
        let val = letter.toLowerCase();

        if(secretword.toLowerCase().indexOf(val) === -1){
            setErrorCount(errorCount+1);
        }
        setGuessedLetters(prev => [...prev,val]);

    }

    let isgamewon = true;
    // console.log(guessedLetters);
    // console.log(secretword);
    for(let i=0;i<secretword.length;i++){
        if ( guessedLetters.indexOf(secretword[i]) === -1){
            isgamewon = false;
        }
    }
    return (
        <div className={isShown ? "" : 'hidden'}>
            <div>
                Mistakes Left : {maxErrors - errorCount}
            </div>
        <LetterGrid
            secretword={secretword}
            guessedLetters = {guessedLetters}
        />
        <ButtonGrid 
            letterGuessed = {letterGuessedHandler}
            isShown_gamewin = { !isgamewon}
            isShown_gamelost = {errorCount < maxErrors}
        />
        <GameResult
            isgamelost = {errorCount >= maxErrors}
            isgamewon = { isgamewon}
        />
        </div>
    );
}