import React from 'react';

const NumberPattern = () => {
    const leter=[];   
    const getleter=()=>{
        let x=["0","a","b","c","d","e","f","g"]
      for(let i=0;i<5;i++){
        for(let j=1;j<i+1;j++){
            leter.push(x[0+j])
        }
        leter.push(<br/>)
      }
      return leter
   }
    return (
        <div>
          <ul>{getleter()}</ul>  
        </div>
    );
}

export default NumberPattern;