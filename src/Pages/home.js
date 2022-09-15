import React from 'react';
import { useState } from 'react';

const Home = () => {
  const [Task,setTask]=useState('')
  const [Tasks,setTasks]=useState([]);
  
    return (
        <div className='container '>
            <h1 className='mt-3 text-center text-info bg-dark' >To-DO APP</h1> 
            <div className='row'>
            <div className='col-8'>
            <input className='form-control' type="text" placeholder="Enter Task"
            value={''}
            onChange={(e)=>{setTask(e.target.value)}}/>
            </div>
            <div className='col-4'>
            <button className='btn btn-primary'>ADD TASK</button>
            </div>
            <div className='badge'>
              You have
              {
                Tasks.length?"No Task"
                :Tasks.lenght===1?"1 Task"
                :Tasks.lenght>1?`${Tasks.lenght} Tasks`
                :null
              }
            </div>
            </div>
        </div>
    );
}

export default Home;
