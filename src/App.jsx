import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import WaveTransition from './components/WaveTransition.jsx';
import ArtistPage from './pages/ArtistPage.jsx';

/* ── 개발자 페이지 하단 '첫 화면으로' 버튼 ── */
const backGlow = keyframes`
  0%,100% { box-shadow: 0 0 10px rgba(74,158,255,0.27); }
  50%      { box-shadow: 0 0 28px rgba(74,158,255,0.6); }
`;

const DevBottomSec = styled.div`
  padding: 3rem 10% 5rem;
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  border-top: 1px solid #1a1a2e;
`;

const DevBackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 2.4rem;
  background: transparent;
  border: 1px solid rgba(74,158,255,0.35);
  border-radius: 8px;
  color: #4a9eff;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  cursor: pointer;
  animation: ${backGlow} 2.5s ease infinite;
  transition: background 0.2s, transform 0.2s;
  &:hover { background: rgba(74,158,255,0.1); transform: translateY(-2px); }
`;

function App() {
  const [landingDone, setLandingDone]  = useState(false);
  const [page, setPage]                = useState('developer');
  const [transitioning, setTransition] = useState(false);
  const [toArtist, setToArtist]        = useState(true);

  /* 개발자 랜딩 중일 때만 스크롤 막기 */
  useEffect(() => {
    const shouldHide = !landingDone && page === 'developer';
    document.body.style.overflow = shouldHide ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [landingDone, page]);

  const handleGoArtist  = () => { setToArtist(true);  setTransition(true); };
  const handleBackToDev = () => { setToArtist(false); setTransition(true); };

  const handleWaveDone = () => {
    setPage(toArtist ? 'artist' : 'developer');
    setTransition(false);
  };

  /* '첫 화면으로' — 랜딩 리셋 후 스크롤 최상단 */
  const handleBackToLanding = () => {
    setLandingDone(false);
    window.scrollTo({ top: 0 });
  };

  /* wave 중에는 양쪽 페이지를 동시 렌더링 — 도착 페이지가 wave 뒤에서 미리 나타남 */
  const showDev    = page === 'developer' || (transitioning && !toArtist);
  const showArtist = page === 'artist'    || (transitioning && toArtist);

  return (
    <>
      <CustomCursor isLanding={!landingDone} color={page === 'artist' ? '#e8a045' : '#4a9eff'} />

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
          {landingDone && <About />}
          {landingDone && <Skills />}
          {landingDone && <Projects />}
          {landingDone && <Contact />}
          {landingDone && (
            <DevBottomSec>
              <DevBackBtn onClick={handleBackToLanding}>
                ↑ 첫 화면으로 돌아가기
              </DevBackBtn>
            </DevBottomSec>
          )}
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