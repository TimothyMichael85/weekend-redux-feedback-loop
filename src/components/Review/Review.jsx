import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Review({getResults}){

    const history = useHistory();

    const feeling = useSelector((store) => store.feeling);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comments = useSelector((store) => store.comments);

    const submitActual = (event) => {
        event.preventDefault();
        console.log('clicked review');

        axios
            .post('/feedback', {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments
            })
            
            .then(response => {
                getSurvey();
                dispatchEvent({
                    type:'CLEAR',
                });

            }).catch(err => {
                console.log('error in client post:', err);
            });
        history.push('/completed');
    };

    return (
        <div>
        <h2>Does this look right to you?</h2>
            
            <ul>
                <li>Feelings: {feeling} </li>
                <li>Understanding: {understanding}</li>
                <li>Support: {support}</li>
                <li>Comments: {comments} </li>
            </ul>
            <button onClick={submitActual}>SUBMIT</button>
        </div>    
    )
}


export default Review