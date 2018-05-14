import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

export default () => (
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
