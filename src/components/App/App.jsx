import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/';
import './App.css';
import Header from '../Header/Header';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <Router>
        <Header />
        <Feelings />
        <Understanding />
        <Support />
        <Comments />
        <Review />
      </Router>
    </div>
  );
}

export default App;
