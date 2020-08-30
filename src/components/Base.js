import React from 'react';

import Keys from './Keys'
import Controls from './Controls'
const Base = () => {

  

  return (
    <div className="container" id="drum-machine">
      <Keys/>
      <Controls/>
    </div>
  );
}

export default Base;
