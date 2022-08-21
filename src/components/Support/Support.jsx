import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';



function Support(){

    const dispatch = useDispatch();
    const history = useHistory();

    //variable for input
    const [support, setSupport] = useState('');

    const submitSupport = (event) => {
        event.preventDefault();
        console.log('submitSupport');
        if(!support){
            alert('Must input value');
        } else {
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })
            history.push('/comments');
    }
    };

    return (
        <>
        <h2>How well did you feel supported today?</h2>
        <h3>1 is not at all supported
            <br></br>
            10 is Extremely supported
        </h3>
        <input 
                value={support}
                type="number"
                onChange={(event) => setSupport(event.target.value)}
        />         
                <button onClick ={submitSupport}>NEXT</button>

        </>
    )
}


export default Support