import { useHistory } from "react-router-dom";

function Home(){

    const history = useHistory();

    const startSurvey = () => {
        history.push('/feeling')
    }

    return (
        <>
        <h1>Your honest feedback is most appreciated</h1>
        <h3>Lying makes kittens cry!</h3>
        <h4>Please click the button to begin the survey</h4>
        <button onClick={startSurvey}>START SURVEY</button>

        </>

    )
}


export default Home