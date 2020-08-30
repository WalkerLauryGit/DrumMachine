import React, {useEffect} from 'react'



export default function Key(props) {


  const handleKeyPress = e => {
    let audio = document.getElementById(e.key)
    let sound = new Audio(audio.src)
    audio.parentElement.style.backgroundColor = 'red'
    sound.play()
    setTimeout(function(){
      audio.parentElement.style.backgroundColor = 'white'
    }, 100)
    
  }


  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    
    return () =>{
      document.removeEventListener('keydown')
    }
  },[])

  // function handleKeyPress(e){
  //   console.log(e)
  // }

  function changeBackgroundOnMouseDown(e){
    let audio = e.target.querySelector('audio').src;
    let sound = new Audio(audio)
    sound.play()
    e.target.style.backgroundColor = 'red'
  }
  
  function changeColorToWhiteMouseUp(e){
    e.target.style.backgroundColor = "white"
  }

  return (
    <div className="drum-pad" onMouseDown={changeBackgroundOnMouseDown} onMouseUp={changeColorToWhiteMouseUp}>
      {props.letter}
      <audio src={props.audio} className="clip" id={props.letter}></audio>
    </div>
  )
}


  

