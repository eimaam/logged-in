import React from 'react'
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { LogItButton } from './components/LogItButton';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
