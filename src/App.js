import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hi, Namasteeeeeeeeeeee manchigunnara nen manchigunna
        <Person name="kaushik" age="24"/>
        <Person name="karthik"  age="26">My Hobbies: Racing</Person>
        <Person name="Dev in making" age="1"/> 
      </div>

    );
  }
}

export default App;
