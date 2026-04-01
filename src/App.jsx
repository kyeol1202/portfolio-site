import { useState, useEffect, useCallback } from 'react';
import Navbar        from './components/Navbar.jsx';
import Hero          from './components/Hero.jsx';
import About         from './components/About.jsx';
import Skills        from './components/Skills.jsx';
import Projects      from './components/Projects.jsx';
import Contact       from './components/Contact.jsx';
import CustomCursor  from './components/CustomCursor.jsx';
import WaveTransition from './components/WaveTransition.jsx';

function App() {
  const [landingDone, setLandingDone] = useState(false);
  const [mode,        setMode]        = useState('dev');   // 'dev' | 'artist'
  const [waveActive,  setWaveActive]  = useState(false);
  const [waveToArtist,setWaveToArtist]= useState(true);

  /* 랜딩 중 스크롤 잠금 */
  useEffect(() => {
    document.body.style.overflow = landingDone ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [landingDone]);

  /* 모드 전환: 웨이브 → 중간 지점에서 테마 클래스 토글 */
  const toggleMode = useCallback(() => {
    if (waveActive) return;          // 전환 중 중복 방지
    const toArtist = mode === 'dev';
    setWaveToArtist(toArtist);
    setWaveActive(true);
    document.body.classList.add('wave-transitioning');

    /* 웨이브가 화면 중앙을 지날 때 색상 전환 */
    setTimeout(() => {
      document.body.classList.toggle('artist-mode', toArtist);
      setMode(toArtist ? 'artist' : 'dev');
    }, 350);

    /* 웨이브 종료 후 pulse 클래스 제거 */
    setTimeout(() => {
      document.body.classList.remove('wave-transitioning');
    }, 880);
  }, [mode, waveActive]);

  return (
    <>
      <CustomCursor isLanding={!landingDone} />

      <WaveTransition
        active={waveActive}
        toArtist={waveToArtist}
        onComplete={() => setWaveActive(false)}
      />

      {!landingDone && (
        <Hero
          onExitComplete={() => setLandingDone(true)}
          mode={mode}
          onToggleMode={toggleMode}
        />
      )}

      {landingDone && <Navbar mode={mode} onToggleMode={toggleMode} />}

      <About />
      <Skills  mode={mode} />
      <Projects mode={mode} />
      <Contact />
    </>
  );
}

export default App;
