import './App.css';
import Person from './Person/Person'

const App = () => {
  return (
    <div className="App">
      <h1>Some React Components:</h1>
      <Person name="Jane" age="26">Hi, I am the Person's Child.</Person>
      <Person name="Dorian" age="36"/>
    </div>
  );
}

export default App;
