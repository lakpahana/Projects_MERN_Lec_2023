//import


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import WeatherService from './components/WeatherService';

function App() {
  return (
    <div className="App">
      <Link to='/' 

        element={
          <WeatherService />
        } 
      >Home</Link>
      <Router>
        <Routes>
          <Route path='/' element={
            <WeatherService />
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
