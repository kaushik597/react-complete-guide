import React, { Component } from 'react';
import Radium from 'radium'
import Person from './Person/Person';
import './App.css';

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
      backgroundColor:"green",
      color:"white",
      font:"inherit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer",
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
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

      style.backgroundColor="red";
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }
   

    }

    const classes=[];
    if(this.state.persons.length <= 2){
      console.log(this.state.persons.length);
      classes.push('red');
      console.log(classes);
    }
    if(this.state.persons.length <= 1){
      console.log(this.state.persons.length);
      classes.push('bold')
      console.log(classes);

    }
    return (
      <div className="App">
        <h1>Hi Iam react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
        style={style}
        onClick={this.toggleHandler}>Toggle persons</button>
        {persons}
        
      </div>

    );
  }
}

export default Radium(App);
