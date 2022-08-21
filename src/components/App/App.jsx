import React from 'react';
import axios from 'axios';
import './App.css';

import {useSelector} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

//Components
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

//import '@fontsource/roboto';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getResults();
  }, []);

  //GET
  const getResults = () =>

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    </Router>
  );
}

export default App;
