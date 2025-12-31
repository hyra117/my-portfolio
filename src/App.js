import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </div>
  );
};

export default App;
