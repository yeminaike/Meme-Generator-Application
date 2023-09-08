import React, { useState } from 'react';




function Counter() {
    const [count , setCount] = useState(0);

    function add(){
        // setCount(count + 1)
        //arrow function was set here
        setCount(prevCount => prevCount + 1)
    }

    function substract(){
        // console.log("decrease")
        // setCount(count -1)
        setCount(prevCount => prevCount - 1)
    }

    function resetToZero(){
        setCount(0)
    }



    return ( 
        <div className='counter'>
<button className='counter--minus' onClick={substract}>-</button>

 <Count number={count}/>
 <div className='counter-count'> 

    {/* <h1>{count}</h1> */}
   
</div>

<button onClick={add} className='counter--plus' >+</button>
<button onClick={resetToZero} className='counter--reset'>Reset</button>
        </div>
     );
}

export default Counter;