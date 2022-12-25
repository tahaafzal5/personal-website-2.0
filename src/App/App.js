import Navbar from '../Navbar/Navbar.js';
import Home from '../Home/Home.js';
import Resume from '../Resume/Resume.js';
import Projects from '../Projects/Projects.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/resume' element={<Resume />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
