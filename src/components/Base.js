import React, {useEffect} from 'react';

import Keys from './Keys'
import Controls from './Controls'
const Base = () => {

  const handleKeyPress = e => {
    try{
    let audio = document.getElementById(e.key)
    
    let sound = new Audio(audio.src)
    audio.parentElement.style.backgroundColor = 'red'
    sound.play()
    setTimeout(function(){
      audio.parentElement.style.backgroundColor = 'white'
    }, 100)}catch{
      return
    }
  }
  


  useEffect(() => {
    let body = document.querySelector('body')
    console.log(body)
    body.addEventListener('keydown', handleKeyPress)
    
    return () =>{
      body.removeEventListener('keydown')
    }
  },[])

  

  return (
    <div className="container" id="drum-machine">
      <Keys/>
      <Controls/>
    </div>
  );
}

export default Base;
