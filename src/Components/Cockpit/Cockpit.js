import React, {useEffect} from 'react'
import classes from './Cockpit.css'

const cockpit=(props)=>{
  useEffect(()=>{
    console.log("[cockpit.js] use effect");
    setTimeout(()=>{
      alert("use  effect executed")
    },1000)
  },[])
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return(
        <di className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={props.toggle}>
          Toggle Persons
        </button>
    </di>
    )
    
}

export default cockpit;