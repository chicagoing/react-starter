import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import HeroBanner from './HeroBanner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/compontents/App.js</code> and save to reload.
        </p>
        <HeroBanner />
      </div>
    );
  }
}

export default App;
