import './App.css';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
