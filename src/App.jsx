import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import WaveTransition from './components/WaveTransition.jsx';
import ArtistPage from './pages/ArtistPage.jsx';

function App() {
  const [landingDone, setLandingDone]  = useState(false);
  const [page, setPage]                = useState('developer');
  const [transitioning, setTransition] = useState(false);
  const [toArtist, setToArtist]        = useState(true);

  useEffect(() => {
    document.body.style.overflow = landingDone ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [landingDone]);

  const handleGoArtist = () => { setToArtist(true);  setTransition(true); };
  const handleBackToDev = () => { setToArtist(false); setTransition(true); };

  const handleWaveDone = () => {
    setPage(toArtist ? 'artist' : 'developer');
    setTransition(false);
  };

  /* wave 중에는 양쪽 페이지를 동시 렌더링 — 도착 페이지가 wave 뒤에서 미리 나타남 */
  const showDev    = page === 'developer' || (transitioning && !toArtist);
  const showArtist = page === 'artist'    || (transitioning && toArtist);

  return (
    <>
      <CustomCursor isLanding={!landingDone} />

      <WaveTransition
        active={transitioning}
        toArtist={toArtist}
        originX={0.88}
        originY={0.5}
        onComplete={handleWaveDone}
      />

      {showDev && (
        <div style={{ display: page === 'developer' ? 'block' : 'none' }}>
          {!landingDone && (
            <Hero
              onExitComplete={() => setLandingDone(true)}
              onArtistClick={handleGoArtist}
            />
          )}
          {landingDone && <Navbar />}
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}

      {showArtist && (
        <div style={{ display: page === 'artist' ? 'block' : 'none' }}>
          <ArtistPage onBackToDev={handleBackToDev} />
        </div>
      )}
    </>
  );
}

export default App;