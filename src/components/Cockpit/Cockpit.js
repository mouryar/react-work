import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit = (props) => {

    var buttonClass = classes.Button;
    if(props.showPerson){
        buttonClass = [classes.Red, classes.Button].join(" ");
    }

    const assignedClasses  = [];
    if(props.persons.length  <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    
    return (
        <Aux>
          <h1>Hi This my home page</h1>
          <p className={assignedClasses.join(' ')}>Secondary header</p>
          <button className={buttonClass} onClick={props.clicked}>Show Persons</button>
        </Aux>
    );
}

export default cockpit;