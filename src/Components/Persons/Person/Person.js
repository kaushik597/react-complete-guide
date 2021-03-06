import React ,{Component} from 'react';
import Auxilliary from '../../../hoc/Auxilliary'
import PropTypes from 'prop-types'
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'

class Person extends Component{
  constructor (props){
    super(props)
    this.inputElementRef=React.createRef()
  }

  static contextType= AuthContext

  componentDidMount(){
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render(){
    console.log("[person.js] render ");
    return (
      // <div className={classes.Person}>
      // <Auxilliary>
      <Auxilliary>
          {
            this.context.authenticated? <p>Is Authenticated</p>:<p>Please login</p>

          }
      
        <p onClick={this.props.click}>
              I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p key="i2">{this.props.children}</p>
            <input 
            key="i3"
            ref={this.inputElementRef}
            type="text" onChange={this.props.changed} value={this.props.name} />
      </Auxilliary>
            
          // </Auxilliary>
       
      // </div>
    );

  }
 
};

Person.proptype={
  click:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func
}

export default withClass(Person,classes.Person);
