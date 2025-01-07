import React from 'react'
import "../Routing/Invalid.css"
import { useNavigate } from "react-router-dom";

const Invalid=()=>{
    const navigate=useNavigate();
    const onclickHandler=()=>{
        navigate("/")
    }


    return(
        <div className='invalid-main'>
        <center>
        <div className='invalid-box'>
        <h1>404 user error</h1>
        <button onClick={onclickHandler} className='invalid-button'>Back to home screen</button>
        </div>
        </center>
        </div>
    )
}
export default Invalid 

