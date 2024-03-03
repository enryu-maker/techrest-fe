import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Screen/Home';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
