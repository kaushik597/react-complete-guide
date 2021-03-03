import React , {Component} from 'react';
import Person  from './Person/Person'
class Persons extends Component{

  static getDerivedStateFromProps(props,state){
    console.log("[persons.js] getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("[persons.js]  shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("[personss.js] getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log("[persons.js] commponentDidUpdate");
  }
  render(){
    console.log("persons  js rendering");

    return this.props.persons.map((person, index) => {

        return (
            <Person
            click={() => this.props.click(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={event => this.props.changed(event, person.id)}
          />
         
        );
      })

  }


    
}


export default Persons;