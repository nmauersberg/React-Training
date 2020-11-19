import { useState } from 'react';

import './App.css';
import Person from './Person/Person';
import personsData from './Person/Persons.json';

const App = () => {
    const [persons, setPersons] = useState(personsData);

    return (
        <div className="App">
            <h1>Some React Components:</h1>
            {persons.map((person, index) => {
                return <Person
                    name={person.name}
                    age={person.age}
                    key={index}>
                    {person.child}
                </Person>
            })}
            <button onClick={() => {
                const newPerson = { name: 'Will', age: 15 };
                const updatedPersons = [...persons, newPerson]
                setPersons(updatedPersons);
            }}>
                Add more Persons
            </button>
        </div>
    );
}

export default App;