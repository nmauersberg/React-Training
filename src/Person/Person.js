import React, { useState } from 'react';
import './Person.css'

const Person = (props) => {
    const [ followers, setFollower ] = useState(0);
    const [ personName, setNewName ] = useState(props.name);

    return (
        <div className="personElement">
            <p>My name is {personName} and I am {props.age} years old!</p>
            <p>{followers} people are following me.</p>
            <div className="buttonRow">
                <button onClick={() => setFollower(followers + 1)}>Add new follower</button>
                <input className="inputField" type="text" placeholder="Change name" onChange={(evt) => setNewName(evt.target.value)}/>
            </div>

            {props.children}
        </div>
    )
}

export default Person;