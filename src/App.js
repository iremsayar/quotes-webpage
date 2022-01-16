import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeContextProvider } from './contexts/ThemeContext';


function App() {

  return (
    <ThemeContextProvider>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}/>
      </Routes>
      <Footer />
      </div>
      </ThemeContextProvider>
  );
}

export default App;
