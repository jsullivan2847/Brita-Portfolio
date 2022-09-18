import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Corsets from './pages/Corsets/corsets';
import Projects from './pages/Projects/projects';
import Professional from './pages/Professional/professional';
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
        <Professional/>
      </Route>
      <Route path='/Projects'>
        <Projects/>
      </Route>
    </div>
  );
}

export default App;
