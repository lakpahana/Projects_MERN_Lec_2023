import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import WeatherService from './components/WeatherService';

function App() {
  return (
    <div className="App">
      <Route path='/' element={
        <WeatherService/>
      }></Route>
    </div>
  );
}

export default App;
