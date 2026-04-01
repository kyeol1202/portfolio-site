import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import CustomCursor from './components/CustomCursor.jsx';

function App() {
  const [landingDone, setLandingDone] = useState(false);

  /* 랜딩 중에는 스크롤 잠금 */
  useEffect(() => {
    document.body.style.overflow = landingDone ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [landingDone]);

  return (
    <>
      <CustomCursor isLanding={!landingDone} />

      {/* Hero: position fixed, z-index 50 — 랜딩 완료 시 언마운트 */}
      {!landingDone && (
        <Hero onExitComplete={() => setLandingDone(true)} />
      )}

      {/* 메인 콘텐츠: Hero 뒤에 항상 렌더링됨. 랜딩 후 노출 */}
      {landingDone && <Navbar />}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
