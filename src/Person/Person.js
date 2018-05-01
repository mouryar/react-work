import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

    const style = {
        '@media (min-width:500px)':{
            width: '450px'
        }
    }
    return (        
            <div style = {style} className='Person'>
                <p onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
                <p>{props.children}</p>
                <input onChange= {props.changed} value = {props.name}/>
            </div>
    );
}

export default Radium(person);