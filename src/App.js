import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js' 

class App extends Component {
  state = {
    persons: [
      {name: 'Ramkiran'},
      {name: 'Manoj'}
    ]
  };

  nameChangerMethod = (event) => {
    this.setState({
      persons: [
        {name: event.target.value},
        {name: 'Manoj'}
      ]
    })
  };

  


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <UserInput
          style = {style}
          name={this.state.persons[0].name}
          changed={this.nameChangerMethod}
        />
        <UserOutput
          name={this.state.persons[0].name}
        />
        <UserOutput
          name={this.state.persons[1].name}
        />
      </div>
    );
  }
}

export default App;
