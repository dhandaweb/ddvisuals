import React from 'react';
import './App.css';
import Main from './Main';
import SideBar from './SideBar';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Router>
        <SideBar />
        <Main />
      </Router>
    </div>
  );
}

export default App;
