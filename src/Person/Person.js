import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
        <div className="personElement">
            <p>My name is {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;