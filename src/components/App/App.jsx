//React and redux imports
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/';

//All the components needed for App
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

//Function to display on App
function App() {
  const dispatch = useDispatch();

  //All components and routes for feedback loop
  return (
    <div className='App'>
      <Router>
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/feelings">
          <Feelings />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/thankyou">
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
