import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const sweep = keyframes`
  from { transform: translateX(-110vw); }
  to   { transform: translateX(110vw); }
`;

const Wrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 990;
  pointer-events: none;
  overflow: hidden;
`;

/* ① 선행 에너지 스파이크 — 극세, 최고속 */
const Spike = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 6px; height: 100%;
  background: ${({ $a }) => $a ? '#fff' : '#fff'};
  box-shadow:
    0 0 18px 6px  ${({ $a }) => $a ? '#a855f7' : '#4a9eff'},
    0 0 60px 20px ${({ $a }) => $a ? '#7c3aed90' : '#2563eb90'};
  animation: ${sweep} 0.52s cubic-bezier(0.5,0,0.85,0.5) forwards;
  z-index: 993;
`;

/* ② 주 웨이브 바디 — 넓은 그라디언트 */
const MainWave = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 55vw; height: 100%;
  background: ${({ $a }) => $a
    ? 'linear-gradient(90deg,transparent 0%,#4a007880 15%,#a855f7dd 42%,#f59e0bcc 52%,#7c3aed80 80%,transparent 100%)'
    : 'linear-gradient(90deg,transparent 0%,#0a2a6080 15%,#4a9effdd 42%,#a0d4ffcc 52%,#1a4a9080 80%,transparent 100%)'
  };
  filter: blur(3px);
  animation: ${sweep} 0.65s cubic-bezier(0.5,0,0.85,0.5) forwards;
  z-index: 992;
`;

/* ③ 잔광 — 매우 넓고 부드럽게 번짐 */
const TrailGlow = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 95vw; height: 100%;
  background: ${({ $a }) => $a
    ? 'linear-gradient(90deg,transparent 0%,#a855f720 30%,#f59e0b30 50%,transparent 100%)'
    : 'linear-gradient(90deg,transparent 0%,#4a9eff20 30%,#a0d4ff30 50%,transparent 100%)'
  };
  filter: blur(18px);
  animation: ${sweep} 0.82s cubic-bezier(0.5,0,0.85,0.5) forwards;
  z-index: 991;
`;

export default function WaveTransition({ active, toArtist, onComplete }) {
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(onComplete, 860);
    return () => clearTimeout(t);
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <Wrap>
      <TrailGlow $a={toArtist} />
      <MainWave  $a={toArtist} />
      <Spike     $a={toArtist} />
    </Wrap>
  );
}
