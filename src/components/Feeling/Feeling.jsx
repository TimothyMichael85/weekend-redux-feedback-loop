import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



function Feeling(){

    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState(0);
    
    const submitFeels = (event) => {
        event.preventDefault();
        console.log('submitFeels');
        if(!feeling){
            alert('You must have feels!');
            
        }else{
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })
        history.push('/understanding');   
        }
    };

    return (
        <>
        <h2>How do you feel about today's material?</h2>
        <h3>1 meaning that you forgot how to spell your name. 
            <br></br>10 meaning you could successfully teach it to a kindergarten class. 
        </h3>
            <input 
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
            />
            <br></br>
            <button onClick={submitFeels}>NEXT</button>
        </>
    )
}


export default Feeling