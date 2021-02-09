import React, { Component } from 'react';
import './App.css';
import Person from "./components/Person";

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <h1> Udemy Project! </h1>
        <Person name="Max" age="25" />
        <Person name="Mia" age="50"> I love to eat ice cream </Person>
      </div>
    )
  }

}

export default App;
