import React, { useState } from 'react';
import PersonStyle from './Person.module.css'

const Person = (props) => {
    const [personName, setNewName] = useState(props.name);
    const hasChildren = props.children !== undefined;

    const childElement = (
        <p className={PersonStyle.childElement}>
            {props.children}
        </p>
    )

    return (
        <div className={PersonStyle.personElement}>
            <div>
                <p className={PersonStyle.removeIcon} onClick={() => props.deleteById()}>x</p>
                <p className={PersonStyle.personId}>id: {props.id}</p>
                <br></br>
            </div>
            <div className={PersonStyle.personDataContainer}>
                <p>My name is {personName} and I am {props.age} years old!</p>
                <p>{props.followers} people are following me.</p>
                <div className={PersonStyle.buttonRow}>
                    <button className={PersonStyle.buttonWithMargin} onClick={() => {
                        const newFollowerCount = props.followers + 1;
                        const updatedPerson = { ...props };
                        updatedPerson.followers = newFollowerCount;
                        props.updatePersons(updatedPerson);
                    }}>
                        Add new follower
                </button>
                    {/* <input
                    className={PersonStyle.inputField}
                    type="text"
                    placeholder="Change name"
                    value={props.name}
                    onChange={(evt) => {
                        const updatedPerson = { ...props };
                        updatedPerson.name = evt.target.value;
                        props.updatePersons(updatedPerson);
                    }} /> */}
                </div>
                {hasChildren ? childElement : null}
            </div>
        </div>
    )
}

export default Person;