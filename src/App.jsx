import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Nosotros from './Pages/Nosotros';
import Contacto from './Pages/Contacto';
import Fooder from './Components/Fooder';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      <Fooder />
    </div>
  )
}

export default App
