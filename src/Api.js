import React, { useEffect, useState } from 'react';


function Api() {
    const[starWarsData, setStarWarsData] = useState({})

    const[count, setCount] = useState(0)
     console.log("hello")
     


    useEffect(()=> {
        console.log("Effect ran")
         fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
         .then(data => setStarWarsData(data))
    
    }, [])


    useEffect(()=> {
        console.log("effect dey run")
        fetch(`https://swapi.dev/api/people/1${count}`)
        //the end point here is people/1
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    },[count])
    return (  
<div>
<pre>{JSON.stringify(starWarsData, null, 2)}</pre>
<h2>The Count is {count}</h2>
{/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button> */}
<button onClick={() => setCount(prevCount => prevCount + 1 )}>Get Next Character</button>
</div>
    );
}

export default Api;