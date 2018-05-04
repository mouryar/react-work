import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
 

class Person extends Component{

    componentDidMount(){
        if(this.props.position === 0)
        {
            this.inputElement.focus();
        }
    }
    render(){
        return(
        <Aux>
            <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input 
                ref= {(inp) => this.inputElement = inp}
                onChange= {this.props.changed} 
                value = {this.props.name}/>
        </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default WithClass(Person, classes.Person);