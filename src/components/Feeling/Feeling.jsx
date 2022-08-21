import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
        <h3>On a scale of 1 to 10
            <br></br>
            No wrong answers. We're all in this together!
        </h3>
       
            <input 
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                // I know I should know how to set a max 10 for this input, but I'm absolutely blanking. come back later if time
            />
    
            <br></br>
            <button onClick={submitFeels}>NEXT</button>
        </>
    )
}


export default Feeling