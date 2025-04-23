import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App; 