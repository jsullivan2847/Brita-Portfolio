import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
