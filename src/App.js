import logo from './option 2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" />
        <form>
          <div>
          <label>
          What do you want to know?         
          </label>
          </div>
          <input type="text" name="question"/>
          <input type="submit" value="Submit"/>
        </form>
      </header>
    </div>
  );
}

export default App;
