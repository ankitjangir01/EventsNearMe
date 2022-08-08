import './App.css';
import Home from './Components/Home';
import { Routes, Route} from 'react-router-dom';
import AddEvent from './Components/AddEvent';
import AllEvents from './Components/AllEvents';
import Signup from './Components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventDetails from './Components/EventDetails';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/addevent" element={<AddEvent/>} />
        <Route exact path="/allevents" element={<AllEvents/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route path="/eventdetails/:eventid" element={<EventDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
