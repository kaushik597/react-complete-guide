import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app  = (props)=> {

  const [personsState,setPersonsState]=useState({

    persons:[
      {name:"kaushik",age:24},
      {name:"karthik",age:26},
      {name:"Dev in making",age:1}
    ]

  })

  const switchNameHandler = () =>{
    setPersonsState({
      persons:[
        {name:"Jallam kaushik Yadav",age:24},
        {name:"karthik",age:26},
        {name:"Dev in making",age:2}
      ]
    })
  }
 

    return (
      <div className="App">
        <button onClick={switchNameHandler}>switch name</button>
        <Person 
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
        <Person
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}  /> 
      </div>

    );
  
}

export default app;

