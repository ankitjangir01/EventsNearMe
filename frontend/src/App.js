import './App.css';
import Home from './Components/Home';
import { Routes, Route} from 'react-router-dom';
import AddEvent from './Components/AddEvent';
import AllEvents from './Components/AllEvents';
import SearchResults from './Components/SearchResults';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/addevent" element={<AddEvent/>} />
        <Route exact path="/allevents" element={<AllEvents/>} />
      </Routes>
    </div>
  );
}

export default App;
