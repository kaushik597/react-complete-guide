import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   Hi, Namasteeeeeeeeeeee manchigunnara nen manchigunna
      // </div>

      React.createElement('div',{className:'App'},React.createElement('h2',null,`Nnamste react.create react element use chesi rastunna`))
    );
  }
}

export default App;
