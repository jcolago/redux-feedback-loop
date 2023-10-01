import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

function App() {
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route path= "/" exact>
          <Home />
        </Route>
        <Route path = "/feelings">
        <Feelings />
        </Route>
        <Route path = "/understanding">
        <Understanding />
        </Route>
        <Route path = "/support">
        <Support />
        </Route>
        <Route path = "/comments">
        <Comments />
        </Route>
        <Route path = "/review">
        <Review />
        </Route>
        <Route path = "/thankyou">
        <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
