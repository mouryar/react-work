import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/withClass'
 

class Person extends Component{
    render(){
        return(
        <Aux>
            <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input onChange= {this.props.changed} value = {this.props.name}/>
        </Aux>
        );
    }
}

export default WithClass(Person, classes.Person);