import React from 'react';
import axios from 'axios';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

//Components
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Home from '../Home/Home';
import Review from '../Review/Review';
import Completed from '../Completed/Completed';

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
