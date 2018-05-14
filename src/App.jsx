import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { NavLink } from 'react-router-dom'

import './App.css';

export default () => (
  <Router>
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> | | <NavLink to="/users">Users</NavLink>
      </nav>
      <main className="container">
        <div>
          <h1>This is a jest poc test</h1>
          <p>If you see this everything is working!</p>
        </div>
        <Routes />
      </main>
    </div>
  </Router>
  );
