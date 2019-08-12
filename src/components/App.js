import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {console.log(this.state)}
          <h1>Turing Yearbook</h1>
          <h2>Staff</h2>
        </header>
        <main className="App-main">
        </main>
      </div>
    );
  }
}

export default App;
