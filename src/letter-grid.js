import Letter from "./letter";

// export default function({secretword}){
//     let letters = secretword
//                         .split('') // ["R","e","a","c","t"]
//                         .map((letter)=> (
//                             <span> {letter} </span>
//                         ));
//     return (
//         <div>
//             {letters}
//         </div>
//     );
// }


export default function({secretword,guessedLetters}){
    let letters = secretword
                        .split('') // ["R","e","a","c","t"]
                        .map((letter,index)=> {
                            let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                        
                            return (
                            <Letter
                                value = {letter}
                                isShown = {isShown}
                                key = {index}
                            />
                        )
                    });
    return (
        <div className="flex">
            {letters}
        </div>
    );
}
