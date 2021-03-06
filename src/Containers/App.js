import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit';
// import WithClass from '../hoc/withClass'
import Auxilliary from '../hoc/Auxilliary'
import withClass from '../hoc/withClass'
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockPit:true,
    changeCounter:0,
    isLogin: false
  };

  static getDerivedStateFromProps(props,state){
    console.log("[App.js] getDerivedStateFromProps",props);
    return state;

  }


  componentDidMount(){
    console.log("[app.js] componentdidmount");
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState,props)=>{
      return  { 
        persons: persons,
        changeCounter:prevState.changeCounter+1
      };
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler=()=>{
    this.setState({isLogin: true})
  }

  render() {
    console.log("[App.js] render method");
    let persons = null;
    

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuth={this.state.isLogin}/>
          
             
           
        </div>
      );

     
    }

    

    return (
      // <div className={classes.App}>

      // <WithClass classes={classes.App}>
      <Auxilliary>
        <button onClick={() => { this.setState({ showCockPit: false }) }}>
          Show  cockpit
        </button>
        <AuthContext.Provider value={{authenticated:this.state.isLogin  ,
         login:this.loginHandler
        }
        }>
        {
          this.state.showCockPit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            toggle={this.togglePersonsHandler}
            /> : null
        }
        {persons}
        </AuthContext.Provider>
       
      </Auxilliary>
      
      // </WithClass>
        
      
      // </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App,classes.App);
