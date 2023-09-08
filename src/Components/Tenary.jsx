import React, { useState } from 'react';



function Tenary () {

 // below is pure javascript   
// const isGoingOut = true

// let answer
// if(isGoingOut == true){
//     answer = "Yes"
// }else{
//     answer = "No"
// }

// let answer = isGoingOut === true ? "Yes" : "No"

const [isGoingOut, setIsGoingOut] = useState("true")

function handleFlips(){
    setIsGoingOut(prevFlip => prevFlip ? false : true)
    //if prevFlip == false else it returns true
    //better method is dealing with boolean
    //setIsGoingOut(prevFlip => !prevFlip)
}

    return (  
        <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div className="state--value" onClick={handleFlips}>
            <h1>{isGoingOut ? "Yes": "No"}</h1>
        </div>
    </div>
    );
}

export default Tenary;

