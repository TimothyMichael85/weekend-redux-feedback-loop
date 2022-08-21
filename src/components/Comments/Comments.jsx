import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';

function Comments(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const submitComments = (event) => {
        event.preventDefault();
        console.log('submitComments');
        dispatch ({
            type: ADD_COMMENTS,
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
                    placeholder="Comments"
                    // onChange={customer_name}
                />


                <button>NEXT</button>


            </form>
            </>    
    )
}


export default Comments