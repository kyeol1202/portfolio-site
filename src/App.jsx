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
  const [landingDone, setLandingDone]   = useState(false);
  const [page, setPage]                 = useState('developer'); // 'developer' | 'artist'
  const [transitioning, setTransition]  = useState(false);
  const [toArtist, setToArtist]         = useState(true);

  /* 랜딩 중 스크롤 잠금 */
  useEffect(() => {
    document.body.style.overflow = landingDone ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [landingDone]);

  /* Artist 버튼 클릭 → wave → artist 페이지 */
  const handleGoArtist = () => {
    setToArtist(true);
    setTransition(true);
  };

  /* Artist → Dev 복귀 */
  const handleBackToDev = () => {
    setToArtist(false);
    setTransition(true);
  };

  /* Wave 완료 → 페이지 전환 */
  const handleWaveDone = () => {
    setPage(toArtist ? 'artist' : 'developer');
    setTransition(false);
  };

  return (
    <>
      <CustomCursor isLanding={!landingDone} />

      {/* ── Wave Transition Overlay ── */}
      <WaveTransition
        active={transitioning}
        toArtist={toArtist}
        originX={0.88}
        originY={0.5}
        onComplete={handleWaveDone}
      />

      {/* ── Developer Portfolio ── */}
      {page === 'developer' && (
        <>
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
        </>
      )}

      {/* ── Artist Portfolio ── */}
      {page === 'artist' && (
        <ArtistPage onBackToDev={handleBackToDev} />
      )}
    </>
  );
}

export default App;