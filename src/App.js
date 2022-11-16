import React, { useEffect } from 'react'
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { LogItButton } from './components/LogItButton';
import { Nav } from './components/Nav';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  useEffect(() => {
    AOS.init({delay: 600, duration: 600, easing: 'ease-out'});
  }, [])

  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <Footer /> */}
      <ToastContainer
      autoClose={3000}
      />
    </div>
  );
}

export default App;
