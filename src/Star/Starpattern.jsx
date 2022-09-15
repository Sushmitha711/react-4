import React from 'react';

const Starpattern = () => {
  let Content=[];

let getContent=()=>{
    for(let i=0;i<=5;i++){
        for(let j=0;j<i+1;j++){
            Content.push("*")
        }
        Content.push(<br/>)
    }
    return Content
}
return<h1>{getContent()}</h1>

  
}

export default Starpattern;
