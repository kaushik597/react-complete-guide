import React, {useEffect,  useRef} from 'react'
import classes from './Cockpit.css'

const cockpit=(props)=>{

  const toggleBtnRef=useRef(null)
  useEffect(()=>{
    console.log("[cockpit.js] use effect");
    // setTimeout(()=>{
    //   alert("use  effect executed")
    // },1000)
    toggleBtnRef.current.click();
    return ()=>{
      console.log("[cockpit.js] cleanup work in use effect");
    }
  },[])

  useEffect(()=>{
    console.log("[cockpit.js]2 use effect");
    return ()=>{
      console.log("[cockpit.js] cleanup work in 2 use effect");
    }
  })
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return(
        <di className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>
          Toggle Persons
        </button>
    </di>
    )
    
}

export default React.memo(cockpit);