import React ,{Component} from 'react';
import Auxilliary from '../../../hoc/Auxilliary'
import classes from './Person.css';
import withClass from '../../../hoc/withClass'

class Person extends Component{
  render(){
    console.log("[person.js] render ");
    return (
      // <div className={classes.Person}>
      // <Auxilliary>
      <Auxilliary>
        <p onClick={this.props.click}>
              I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Auxilliary>
            
          // </Auxilliary>
       
      // </div>
    );

  }
 
};

export default withClass(Person,classes.Person);
