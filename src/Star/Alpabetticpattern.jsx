import React from 'react';

const NumberPattern = () => {
    const leter=[];   
    const getleter=()=>{
        let x=["a","b","c","d","e","f","g"]
      for(let i=0;i<5;i++){
        for(let j=0;j<i+1;j++){
            leter.push(x[0+j])
        }
        leter.push(<br/>)
      }
      return leter
   }
    return (
        <div>
          <h1>{getleter()}</h1>  
        </div>
    );
}

export default NumberPattern;