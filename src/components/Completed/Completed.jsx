import { useHistory } from 'react-router-dom';


function Completed(){
    const history = useHistory();

    const over = () => {
        console.log('its over');
        history.push('/');
    }

    return (
        <>
        <h2>YOU DID IT!!!!!!</h2>
        <h3>We knew you could!</h3>

        <h5>Click the button to go back and start a new one
            <br></br>
            Or go home. You look sleepy 
        </h5>
        <button onClick={over}>PEACE OUT!!!</button>

        </>
        
    )
}


export default Completed