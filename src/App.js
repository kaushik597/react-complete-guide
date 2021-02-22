import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state={
    persons:[
      {name:"kaushik",age:24},
      {name:"karthik",age:26},
      {name:"Dev in making",age:1}
    ]
  }
  switchNameHandler = () => {
    // donnt  do this as we cannot mutate state directly ------------->>>this.state.persons[0].name="Jallam Kaushik Yadav"
    this.setState({
      persons:[
        {name:"Jallam kaushik Yadav",age:24},
        {name:"karthik",age:26},
        {name:"Dev in making",age:1}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person name={this.state.persons[0].name}age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[1].name}age={this.state.persons[1].age}/> 
      </div>

    );
  }
}

export default App;
