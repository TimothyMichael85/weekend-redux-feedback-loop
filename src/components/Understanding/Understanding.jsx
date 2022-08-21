import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

function Understanding(){

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(0);

    const submitUnderstand = (event) => {
        event.preventDefault();
        console.log('submitUnderstand');
        if(!understanding){
            alert('You dont have to understand it, but you gotta let me know!');
        }else {
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })
            history.push('/support');
    }
    };

    return (
        <>
        <h2>How well do you understand the material</h2>
        <h3>1 meaning that you forgot how to spell your name. 
            <br></br>10 meaning you could successfully teach it to a kindergarten class. 
        </h3>

        <input 
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
                // I know I should know how to set a max 10 for this input, but I'm absolutely blanking. come back later if time
                />
        <button onClick={submitUnderstand}>NEXT</button>

        </>

    )
}


export default Understanding