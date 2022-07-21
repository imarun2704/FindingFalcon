import React from 'react';
import {useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './result.css';

const Result = () => {
    const result = useSelector((state)=> state.Reducer && state.Reducer.result)
    const timeTaken = useSelector((state)=> state.Reducer && state.Reducer.timeTaken)

  return (
    <div className='Result'>
      {/* <div className='result-title'>Finding Falcon</div> */}
      <div className='result-post'>
        {
            result.status === "success" ?
            <div>Success! Congratulations on Finding on Falcon. King shan is mighty pleased. </div>
            :
            <div>Failed! King shan is disappointed. </div> 
        }
        </div>
      <div className='result-time'>Time Taken : {timeTaken} </div>
      <div className='result-planet'>Planet found : { result.status === "success" ? result.planet_name : "Not found"} </div>
      <div> <Link to="/"> <button className='restart-btn' >Start Again</button> </Link> </div>
    </div>
  )
}

export default Result;