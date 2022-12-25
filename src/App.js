import Navbar from './Navbar.js';
import Home from './Home.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
