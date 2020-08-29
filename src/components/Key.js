import React from 'react'

export default function Key(props) {

  function changeBackgroundOnMouseDown(e){
    
    
    e.target.style.backgroundColor = 'red'
  }

  function changeColorToWhiteMouseUp(e){
    e.target.style.backgroundColor = "white"
  }


  return (
    <div className="drum-pad" onMouseDown={changeBackgroundOnMouseDown} onMouseUp={changeColorToWhiteMouseUp}>
      <p>{props.letter}</p>
      <audio src={props.audio}></audio>
    </div>
  )
}
