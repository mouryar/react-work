import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;
    if(this.state.showPerson){
      persons = (
                <div>
                  <Persons
                    persons={this.state.persons}
                    clicked={this.deletPerson}
                    changed={this.nameChangeHandler}/>
                </div>);
    }
    return (
        <div className={classes.App}>
          <Cockpit
            showPerson={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.toggleHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
