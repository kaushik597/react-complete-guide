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
  deleteHandler=(personIndex)=>{
    // const persons=this.state.persons.slice();
    const persons=[...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons})
    
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
          {this.state.persons.map((person,index)=>{
            return <Person 
            click={()=>{this.deleteHandler(index)}  }
          
            name={person.name}
            age={person.age}/>
          })}
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
