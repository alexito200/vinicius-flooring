import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NavigationBar from './components/Navbar';

function App() {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}
export default App;
