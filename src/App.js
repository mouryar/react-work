import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id:1, name:'Mourya', age:28},
      {id:2, name:'Kumar' , age:29},
      {id:3, name:'Rajala', age:30}
    ],
    otherPerson: 'I',
    showPerson: false
  }

  nameChangeHandler = (event, id) => {
    //Get person Index in the array
    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    //Find the person with Index and update the person.
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    //Update the persons object with updated person.
    const persons = [...this.state.persons];
    persons[personIndex] =  person;

    //set state
    this.setState({
      persons: persons
    })
  }

  toggleHandler = () => {
      let doesShow = this.state.showPerson;
      this.setState({showPerson : !doesShow})
  }

  deletPerson = (personIndex) => {
    const personCopy = [...this.state.persons];
    personCopy.splice(personIndex, 1);
    this.setState({persons: personCopy});
  }
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    const classes  = [];
    if(this.state.persons.length  <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    let persons = null;
    if(this.state.showPerson){
      persons = (
                <div>
                  {this.state.persons.map((person, index) => {
                  return <Person name={person.name} 
                                  age={person.age}
                                  click={this.deletPerson.bind(this, index)}
                                  key={person.id}
                                  changed={(event) => this.nameChangeHandler(event, person.id)}/>
                  })}
                </div>)
      style.backgroundColor = 'red'
    }
    return (
      <div className="App">
        <h1>Hi This my home page</h1>
        <p className={classes.join(' ')}>Secondary header</p>
        <button style={style} onClick={this.toggleHandler}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
