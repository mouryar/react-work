import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import WithClass from '../hoc/withClass'

export const AuthContext = React.createContext(false);

class App extends Component {

  state = {
    persons: [
      {id:1, name:'Mourya', age:28},
      {id:2, name:'Kumar' , age:29},
      {id:3, name:'Rajala', age:30}
    ],
    otherPerson: 'I',
    showPerson: false,
    toggleCount: 0,
    authenticated: false
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
      this.setState( (prevState, props) => {
        return {
          showPerson : !doesShow,
          toggleCount : prevState.toggleCount + 1
        }
      }
      )
  }

  loginClick = () => {
    this.setState({
      authenticated: true
    })
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
        <Aux>
          <Cockpit
            showPerson={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.toggleHandler}
            loginClick={this.loginClick}/>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
          
        </Aux>
    );
  }
}

export default WithClass(App, classes.App);
