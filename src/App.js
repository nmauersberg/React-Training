import './App.css';
import Person from './Person/Person'

const App = () => {
  return (
    <div className="App">
      <p>Some React Components:</p>
      <Person name="Jane"/>
      <Person name="Dorian"/>
    </div>
  );
}

export default App;
