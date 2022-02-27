import logo from './logo.svg';
import './App.css';
import { SmileyFace } from './Components/characters/SmileyFace/smileyFace.js';
import { MouseOver } from './Components/animations/mouseOver.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < SmileyFace />
        {/* <MouseOver /> */}
      </header>
    </div>
  );
}

export default App;
