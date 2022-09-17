import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Corsets from './pages/Corsets/corsets';
import Hamburger from './components/Hamburger/Hamburger';

function App() {
  return (
    <div className="App">
      <Hamburger/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/Corsets'>
        <Corsets/>
      </Route>
    </div>
  );
}

export default App;
