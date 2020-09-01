import React, {useEffect} from 'react'



export default function Key(props) {

  function changeBackgroundOnMouseDown(e){
    let audio = e.target.querySelector('audio').src;
    let sound = new Audio(audio)
    sound.play()
    e.target.style.backgroundColor = 'red'
  }
  
  function changeColorToWhiteMouseUp(e){
    e.target.style.backgroundColor = "white"
  }

  useEffect(() => {
    let pad = document.getElementById(props.letter)
    pad.parentElement.addEventListener('mousedown', changeBackgroundOnMouseDown)
    pad.parentElement.addEventListener('mouseup', changeColorToWhiteMouseUp)
    return () =>{
      pad.removeEventListener(changeBackgroundOnMouseDown)
      pad.removeEventListener(changeColorToWhiteMouseUp)
    }
  },[props.letter])


  return (
    <div className="drum-pad" onMouseDown={changeBackgroundOnMouseDown} onMouseUp={changeColorToWhiteMouseUp}>
      {props.letter}
      <audio src={props.audio} className="clip" id={props.letter}></audio>
    </div>
  )
}


  

