import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom/';
import './App.css';
import Header from '../Header/Header';
import Feelings from '../Feelings/Feelings';

function App() {
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <Router>
        <Header />
        <Feelings />
      </Router>
    </div>
  );
}

export default App;
