import React, { Component } from 'react';
import Routes from './Routes';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <main className="container">
        <div>
          <h1>This is a jest poc test</h1>
          <p>If you see this everything is working!</p>
        </div>
        <Routes />
      </main>
    </Router>
    );
  }
}

export default App;
