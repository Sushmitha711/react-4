import React from 'react';
import NumberPattern from './Star/NumberPattern';
import Alpabetticpattern from './Star/Alpabetticpattern'
 import Starpattern from './Star/Starpattern';
 import Start from './Star/Start';

const App = () => {
  return (
    <div>
    <Start/> <hr/>
     <Starpattern/> <hr/>
      <NumberPattern/><hr/>
      <Alpabetticpattern/>
    </div>
  );
}

export default App;

