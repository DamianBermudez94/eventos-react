import logo from './logo.svg';
import './App.css';
import { EventosComponentes } from './EventosComponentes';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <div>

          <EventosComponentes/>
        </div>
      </header>
    </div>
  );
}

export default App;
