import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Plans from './pages/Plans';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}
export default App;
