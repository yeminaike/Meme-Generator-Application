import React from 'react';
import quotes from "../Images/My Quote.png"



function Click () {
    function handleClick(){
        console.log("I was clicked")
    }

    function handleMouseOver(){
        console.log("mouseover")
    }

    const [important, setIsImportant] = React.useState("Yes")
    //the point of setISImportant function is to change state if possible
    //the important variable is initialized to "Yes", but we can change state of that variable
    //with a function setISImportant.
    console.log(important)

    function handleClick1(){
        setIsImportant("No")
    }
    return ( 
        <div className='container'>

            <img src={quotes} alt='quote' className='quote' onMouseOver={handleMouseOver}/>
            <button onClick={handleClick}>Click me</button>

            <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick1} className="state--value">
                <h1>{important}</h1>
            </div>
        </div>
        </div>
        
     );
}

export default Click ;