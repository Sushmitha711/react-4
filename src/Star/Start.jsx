import React,{useState} from 'react';

const Start = () => {
    const [data, setData] = useState("");
    let myFunction = ()=>{
        let str=[];
        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= i; j++) {
            str.push("*")
            }
            str.push(<br/>)

        }

        console.log(str);
      return   setData(str)
        
}
    return (
        <div>
        <h1>{data}</h1>
       <button onClick={()=>(myFunction())} className="btn btn-success">Click</button> 
        </div>
    );
}

export default Start;
