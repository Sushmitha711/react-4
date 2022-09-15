import React from 'react';

const NumberPattern = () => {
    const number=[];   
    const getNumber=()=>{
      for(let i=1;i<5;i++){
        for(let j=1;j<i+1;j++){
            number.push(j)
        }
            number.push(<br/>)
      }
      return number
   }
   
   
    return (
        <div>
          <ul>{getNumber()}</ul>  
        </div>
    );
}

export default NumberPattern;
