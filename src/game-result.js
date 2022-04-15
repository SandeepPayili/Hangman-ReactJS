export default function GameResult({isgamelost,isgamewon}){
    let output = " ";
    if (isgamelost){
        output = "Sorry ! You lost the game :) ";
    }
    if (isgamewon)
    {
        output = "Hurray ! You won the game ! ";
        // output = isgamewon;
    }
    return (
        <div>
        <canvas id="my-canvas"> </canvas>
            <span className="gameresult"   >  {output}</span>
       
        </div>
    );
}
