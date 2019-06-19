import React, { Component } from 'react';

import './App.scss';
import GridPage from "./pages/GridPage";
import SunPage from "./pages/SunPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GridPage/>
      </div>
    );
  }
}

export default App;
