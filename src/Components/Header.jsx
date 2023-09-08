
import React from 'react';
import meme from "../Images/Troll Face.png"


function Header() {
    return (
    <header className='header'>
<img src={meme} alt='meme-generator' className='header--image'/>
<h2 className='header--title'>Meme Generator</h2>
<h4 className='header-project'>React Course - Project 3</h4>
    </header>
    )
}

export default Header ;