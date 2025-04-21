
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';

import './App.css';
 
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}


export default App;
