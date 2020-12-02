import { useState } from 'react';

import AppStyle from './App.module.css';
import PersonStyle from './Person/Person.module.css'

import Person from './Person/Person';
import personsData from './Person/data/Persons.json';
import newPersonData from './Person/data/NewPerson.json';

// Testing, 123 ...

const App = () => {
    const [persons, setPersons] = useState(personsData);
    const [newPerson, setNewPerson] = useState(newPersonData);

    return (
        <div className={AppStyle.App}>
            <h1>Some React Components:</h1>
            {persons.map((person, index) => {
                return <Person
                    name={person.name}
                    age={person.age}
                    id={person.id}
                    followers={person.followers}
                    key={person.id + Math.random()}
                    deleteByIndex={() => {
                        const updatedPersons = [...persons];
                        updatedPersons.splice(index, 1);
                        setPersons(updatedPersons);
                    }}
                    deleteById={() => {
                        const personIndex = persons.findIndex(p => p.id === person.id);
                        const updatedPersons = [...persons];
                        updatedPersons.splice(personIndex, 1);
                        setPersons(updatedPersons);
                    }}
                    updatePersons={(updatedPerson) => {
                        console.log(updatedPerson);
                        const personIndex = persons.findIndex(p => p.id === person.id);
                        const updatedPersons = [...persons];
                        updatedPersons.splice(personIndex, 1, updatedPerson);
                        setPersons(updatedPersons);
                    }}>
                    {person.children}
                </Person>
            })}
            {/* Change state of newPerson */}
            <button className={PersonStyle.buttonWithMargin} onClick={() => {
                const updatedPerson = { children: 'I have a child now too!', ...newPerson }
                setNewPerson(updatedPerson);
            }}>
                Update new Person
            </button>
            {/* Add newPerson to persons */}
            <button className={PersonStyle.buttonWithMargin} onClick={() => {
                const updatedPersons = [...persons, newPerson]
                setPersons(updatedPersons);
            }}>
                Add more Persons
            </button>
        </div>
    );
}

export default App;