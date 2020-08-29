import React from 'react';
import Key from './Key'
const Keys = () => {
  const keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c' ]
  const audio = ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"]


  return (
    <div className="keys">
      {keys.map((key, index) => {
        return <Key letter={key} key={key} audio={audio[index]}/>
      })}
    </div>
  );
}

export default Keys;
