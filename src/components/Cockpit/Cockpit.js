import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

    var buttonClass = "";
    if(props.showPerson){
        buttonClass = classes.Red;
    }

    const assignedClasses  = [];
    if(props.persons.length  <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
          <h1>Hi This my home page</h1>
          <p className={assignedClasses.join(' ')}>Secondary header</p>
          <button className={buttonClass} onClick={props.clicked}>Show Persons</button>
        </div>
    );
}

export default cockpit;