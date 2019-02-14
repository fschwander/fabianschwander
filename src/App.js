import React, { Component } from 'react';
import LandingPage from "./components/LandingPage";

import './App.scss';
import './components/LandingPage.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
      </div>
    );
  }
}

export default App;
