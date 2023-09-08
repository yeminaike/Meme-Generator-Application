import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Meme from './Components/Meme';
import Click from './Components/Click';
import Counter from './Components/Counter';
import Tenary from './Components/Tenary';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Contact from './Components/Contact';
import WelcomeBody from './Components/WelcomeBody';
import Roof from './Components/Roof';
import Boxes1 from './Boxes1';
import Box from './Box';
import Api from './Api';





function App(props) {
  const [count, setCount] = React.useState(0)
    
  function add() {
      setCount(prevCount => prevCount + 1)
  }
  
  function subtract() {
      setCount(prevCount => prevCount - 1)
  }

  const[thingsArray, setThingsArray] =useState(["Thing 1", "Thing 2"])
//never modify things Array directly instead use a call back function

  function handleAddItem(){
  setThingsArray(prevThingsArray => {
    return [...prevThingsArray, `Things ${prevThingsArray.length + 1}`]
  })
}

  // const thingsArray =["Thing 1", "Thing 2"]
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  function greeting(name) {
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    
    return `Good ${timeOfDay}, ${name}!`
} 
// console.log(greeting("Bob"))  

// const [user, setUser] = useState("Bob");

const [squares, setSquares] = useState(Boxes1)
function toggle(id){
setSquares(prevSquares => {
 return prevSquares.map((square) =>{
 return square.id === id ? {...square, on: !square.on} :square
 //if id matches the parameter-id, if thats true(?) replace the old object with a brandnew object
 // if not the box that was clicked then it returns the ordinary square
 })
})
}






// const styles ={
//   backgroundColor: props.darkMode ? "#222222": "#cccccc"
// }

const squareElements = squares.map(square => (
  <Box 
  key={square.id} 
  // id ={square.id} 
  on={square.on}
  toggle={() => toggle(square.id)}
  //each instance of the box we remember its own toggle and remember its own id.

  />
))



  return (
    <div className="App">
     { <Header/> }
       <Meme/>  
       {/* <Api/>  */}
     {/* <Click/> */}
     {/* { <button onClick={handleAddItem} >Add item</button>} */}
     {/* {thingsElements}  */}
      {/* {<Counter/>}  */}
     {/* {<Tenary/>} */}
     {/* {<Contact/>} */}
     {/* <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button> */}

{/* <main>
<Roof roof={user}/>
          <WelcomeBody body={user}/>
</main> */}
<main>
  {/* {squareElements} */}
</main>
    </div>
  );
}

export default App;
