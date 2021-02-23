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
  switchNameHandler = (newName) => {
    // donnt  do this as we cannot mutate state directly ------------->>>this.state.persons[0].name="Jallam Kaushik Yadav"
    this.setState({
      persons:[
        {name:newName,age:24},
        {name:"karthik",age:26},
        {name:"Dev in making",age:1}
      ],
      showPersons:false
    })
  }

  nameChangeHandler = (event) => {
    // donnt  do this as we cannot mutate state directly ------------->>>this.state.persons[0].name="Jallam Kaushik Yadav"
    this.setState({
      persons:[
        {name:event.target.value,age:24},
        {name:"karthik",age:26},
        {name:"Dev in making",age:1}
      ]
    })
  }

  toggleHandler =()=>{
    const doesShow=this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })


  }

  render() {

    const style={
      backgroundColor:"white",
      font:"inherit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer"
    }

    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
            <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangeHandler}/>
            <Person
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>My Hobbies: Racing</Person>
            <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'samara simha reddy')}/> 
         </div>
      )
   

    }
    return (
      <div className="App">
        <button 
        style={style}
        onClick={this.toggleHandler}>Toggle persons</button>
        {persons}
        
      </div>

    );
  }
}

export default App;
