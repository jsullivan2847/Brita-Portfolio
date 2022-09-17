import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Corsets from './pages/Corsets/corsets';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/Corsets'>
        <Corsets/>
      </Route>
      <Route path='/Professional'>
        <Corsets/>
      </Route>
      <Route path='/Projects'>
        <Corsets/>
      </Route>
    </div>
  );
}

export default App;
