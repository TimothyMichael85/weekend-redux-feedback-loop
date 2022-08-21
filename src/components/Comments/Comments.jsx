import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

function Comments(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const submitComments = (event) => {
        event.preventDefault();
        console.log('submitComments');
        dispatch ({
            type: 'ADD_COMMENTS',
            payload: comments
        })
            history.push('/review');
    };

    return (
        <>
        <h2>Comments Page</h2>
        <p>**This is optional**</p>
        <form onSubmit={(event) => submitComments(event)}>

        <input 
                value={comments}
                type="text"
                onChange={(event) => setComments(event.target.value)} 
                /> 
                


                <button onClick={submitComments}>NEXT</button>


            </form>
            </>    
    )
}


export default Comments