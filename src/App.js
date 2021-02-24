import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {id:1,name:"kaushik",age:24},
      {id:2,name:"karthik",age:26},
      {id:3,name:"Dev in making",age:1}
    ]
  }
  deleteHandler=(personIndex)=>{
    // const persons=this.state.persons.slice();
    const persons=[...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons})
    
  }

  nameChangeHandler = (event,id) => {
    // donnt  do this as we cannot mutate state directly ------------->>>this.state.persons[0].name="Jallam Kaushik Yadav"
   
   const personIndex= this.state.persons.findIndex((p)=>{
     return p.id===id;
   })

   const person={...this.state.persons[personIndex]}

   person.name=event.target.value;

   const persons = [...this.state.persons];
   persons[personIndex]=person

    this.setState({
      persons: persons
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
            key={person.id}
            click={()=>{this.deleteHandler(index)}  }
            name={person.name}
            age={person.age}
            changed={(event)=>this.nameChangeHandler(event,person.id)}/>
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
