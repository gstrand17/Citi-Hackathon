import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './pages/Navbar.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import './App.css'

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>
          <Route path="/page3" element={<Page3/>}/>
        </Routes>
      </div>
  )

}

export default App;
