import React, {Component} from 'react';

import Person from './Person/Person'

class Persons extends Component{

    constructor(props){
        super(props);
        this.lastPersonRef = React.createRef();
    }

    componentDidMount(){
        this.lastPersonRef.current.focus();
    }
    render(){
        return(
            this.props.persons.map((person, index) => {
                return <Person name={person.name} 
                                age={person.age}
                                click={this.props.clicked.bind(this, index)}
                                key={person.id}
                                forwardedRef={this.lastPersonRef}
                                changed={(event) => this.props.changed(event, person.id)}
                                position={index}/>
                })
        );
    }
    
}
export default Persons;
