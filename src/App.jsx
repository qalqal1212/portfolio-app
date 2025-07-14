import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Routes className="hidden md:flex">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;