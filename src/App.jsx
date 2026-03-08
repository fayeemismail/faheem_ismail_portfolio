import React, { useState } from 'react';

import './styles/globals.css';

import CustomCursor  from './components/CustomCursor';
import Loader        from './components/Loader';
import Header        from './components/Header';
import Hero          from './components/Hero';
import About         from './components/About';
import Skills        from './components/Skills';
import Experience    from './components/Experience';
import Projects      from './components/Projects';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      <Loader onDone={() => setLoaded(true)} />

      {loaded && (
        <div style={{ background: 'var(--midnight)', minHeight: '100vh' }}>
          <Header loaded={loaded} />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
