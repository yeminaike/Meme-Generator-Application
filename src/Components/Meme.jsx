import React, { useState, useEffect } from 'react';
import MemesData from '../MemesData';



function Meme() {

    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

   

    const [allMemes, setAllMemes] = useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))

    }, [])

    console.log(allMemes)
    //if there is no update in state it should be an empty array.



    function handleChange(event){
        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage(){
        // const allMemes = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * allMemes.length)
         const url = allMemes[randomNumber].url
        // console.log(url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    return (
         <main>
            <div className='form'>
             <input 
             type='text' 
             placeholder="Top text"
             className='form--input'
             name='topText'
             onChange={handleChange}
             value={meme.topText}

             />   
             <input type='text' 
             placeholder='Bottom text' 
             className='form--input'
             name='bottomText'
             onChange={handleChange}
             value={meme.bottomText}

             />
             <button
              className='form-button'
              onClick={getMemeImage}
            >
             Get a new meme image 🖼
             
             </button>
        </div>
        <div className='meme'>
            <img src={meme.randomImage} className= "meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
             </main>
      );
}

export default Meme ;