import { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

/* ── 조립 ── */
const makeAssemble = (x, y, r) => keyframes`
  0% {
    transform: translate(${x}px, ${y}px) rotate(${r}deg) scale(0.3);
    opacity: 0;
    color: #4a9eff;
    text-shadow: 0 0 30px #4a9eff, 0 0 60px #4a9eff;
    filter: blur(8px);
  }
  55% { opacity: 1; filter: blur(0); color: #a0d4ff; }
  72% {
    transform: translate(${-x * 0.05}px, ${-y * 0.05}px) rotate(${-r * 0.05}deg) scale(1.08);
    text-shadow: 0 0 60px #4a9eff, 0 0 120px #4a9eff;
    color: #fff;
  }
  88% {
    transform: translate(${x * 0.015}px, ${y * 0.015}px) rotate(${r * 0.015}deg) scale(0.96);
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1; color: #ffffff;
    text-shadow: 0 0 12px rgba(74,158,255,0.6);
    filter: blur(0);
  }
`;

/* ── 토네이도 분산 ── */
const makeScatter = (x, y, r) => keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1; filter: blur(0);
  }
  18% {
    transform: translate(${x * 0.07}px, ${y * 0.07}px) rotate(${r * 0.06}deg) scale(1.06);
    opacity: 1; color: #4a9eff; filter: blur(0);
  }
  100% {
    transform: translate(${x}px, ${y}px) rotate(${r}deg) scale(0.04);
    opacity: 0; filter: blur(8px); color: #4a9eff;
  }
`;

/* ── 전체 패널 슬라이드업 ── */
const heroSlideUp = keyframes`
  from { transform: translateY(0); }
  to   { transform: translateY(-100vh); }
`;

const namePulse = keyframes`
  0%, 100% { text-shadow: 0 0 12px rgba(74,158,255,0.6); }
  50%       { text-shadow: 0 0 50px rgba(74,158,255,1), 0 0 100px rgba(74,158,255,0.4); }
`;

const scanSlide = keyframes`
  0%   { top: 0%; opacity: 0.9; }
  100% { top: 100%; opacity: 0; }
`;

const gridFlow = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: 80px 80px; }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const sweepOut = keyframes`
  0%   { opacity: 1; transform: translateX(0)     skewX(0deg); }
  40%  { opacity: 0.5; transform: translateX(-40px) skewX(-5deg); }
  100% { opacity: 0; transform: translateX(-140px) skewX(-10deg); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const clickPulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.9; }
`;

/* ── 데이터 ── */
const LETTERS = [
  { char: 'H', x: -700, y: -280, r: -195, delay: 0.05 },
  { char: 'a', x:  550, y: -420, r:  140, delay: 0.18 },
  { char: 'n', x: -480, y:  480, r: -270, delay: 0.30 },
  { char: 'K', x:  820, y:   80, r:  100, delay: 0.45 },
  { char: 'y', x:  360, y: -520, r: -130, delay: 0.57 },
  { char: 'e', x:  560, y:  460, r:  210, delay: 0.68 },
  { char: 'o', x: -820, y:  160, r:  -70, delay: 0.79 },
  { char: 'l', x:   60, y: -640, r:  185, delay: 0.90 },
];

const SCATTER = [
  { x: -950, y:  -80, r: -1080, delay: 0.00 },
  { x:  880, y:   70, r:   900, delay: 0.04 },
  { x: -780, y:  130, r:  -720, delay: 0.02 },
  { x:  980, y: -100, r:  1080, delay: 0.06 },
  { x: -870, y:   60, r:  -900, delay: 0.08 },
  { x:  730, y:  -70, r:   720, delay: 0.05 },
  { x: -940, y:  100, r: -1080, delay: 0.07 },
  { x:  820, y:   90, r:   900, delay: 0.03 },
];

const ASSEMBLE_DONE = 0.90 + 1.0; // ~1.9s

/* ── Styled ── */
const Section = styled.section`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  background: linear-gradient(135deg, #060810 55%, #0a1628 100%);
  z-index: 50;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(74,158,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(74,158,255,0.04) 1px, transparent 1px);
    background-size: 80px 80px;
    animation: ${gridFlow} 6s linear infinite;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(74,158,255,0.07) 0%, transparent 65%);
    top: -150px; right: -150px;
    border-radius: 50%;
    pointer-events: none;
  }

  ${({ $exiting }) => $exiting && css`
    animation: ${heroSlideUp} 0.55s cubic-bezier(0.6, 0, 0.9, 0.4) 0.72s both;
  `}
`;

const ScanLine = styled.div`
  position: absolute;
  left: 0; width: 100%; height: 2px;
  background: linear-gradient(90deg, transparent, #4a9eff, transparent);
  animation: ${scanSlide} 0.7s ease-out ${ASSEMBLE_DONE + 0.05}s both;
  pointer-events: none;
  z-index: 10;
`;

const NameRow = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 1;
  animation: ${namePulse} 2s ease ${ASSEMBLE_DONE + 0.2}s 2;
`;

const LetterSpan = styled.span`
  display: inline-block;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-shadow: 0 0 12px rgba(74,158,255,0.6);
  opacity: 1;

  ${({ $phase, $x, $y, $r, $delay, $sx, $sy, $sr, $sdelay }) => {
    if ($phase === 'assembling')
      return css`animation: ${makeAssemble($x, $y, $r)} 1s cubic-bezier(0.22,1,0.36,1) ${$delay}s both;`;
    if ($phase === 'exiting')
      return css`animation: ${makeScatter($sx, $sy, $sr)} 0.6s ease-in ${$sdelay}s forwards;`;
    return '';
  }}
`;

const NameDivider = styled.span`
  display: inline-block;
  width: 3px;
  height: clamp(2rem, 5vw, 4.5rem);
  background: linear-gradient(180deg, transparent, #4a9eff, transparent);
  margin: 0 0.15em;
  border-radius: 2px;
  align-self: center;
  box-shadow: 0 0 10px #4a9eff;
  opacity: 0;
  animation: ${fadeUp} 0.3s ease ${ASSEMBLE_DONE}s both;
`;

const Cursor = styled.span`
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  font-weight: 900;
  color: #4a9eff;
  margin-left: 2px;
  animation: ${blink} 1s step-end infinite;
`;

/* 분산 시 텍스트 블록도 왼쪽으로 쓸려 사라짐 */
const TextBlock = styled.div`
  ${({ $phase }) =>
    $phase === 'exiting' &&
    css`animation: ${sweepOut} 0.5s ease-in 0.04s forwards;`}
`;

const Greeting = styled.p`
  color: #4a9eff;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  opacity: 0;
  animation: ${fadeUp} 0.5s ease ${ASSEMBLE_DONE - 0.3}s both;
`;

const Role = styled.h2`
  font-size: clamp(1rem, 2vw, 1.6rem);
  font-weight: 400;
  color: #4a9eff;
  margin-top: 1rem;
  letter-spacing: 0.08em;
  opacity: 0;
  animation: ${fadeUp} 0.5s ease ${ASSEMBLE_DONE + 0.2}s both;
  &::before { content: '// '; opacity: 0.5; }
`;

const Description = styled.p`
  max-width: 520px;
  color: #8899aa;
  line-height: 1.9;
  margin-top: 1.4rem;
  font-size: 0.95rem;
  opacity: 0;
  animation: ${fadeUp} 0.5s ease ${ASSEMBLE_DONE + 0.4}s both;
`;

/* 하단 클릭 힌트 */
const ClickHint = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: #4a9eff;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow: 0 0 10px rgba(74,158,255,0.7);
  opacity: 0;
  animation:
    ${fadeUp}    0.5s ease       ${ASSEMBLE_DONE + 1}s    forwards,
    ${clickPulse} 2s  ease       ${ASSEMBLE_DONE + 1.5}s  infinite;
  pointer-events: none;
`;

/* ── Component ── */
function Hero({ onExitComplete }) {
  const phaseRef = useRef('assembling');
  const [phase, setPhaseState] = useState('assembling');

  const setPhase = (p) => { phaseRef.current = p; setPhaseState(p); };

  /* assembling → idle */
  useEffect(() => {
    if (phase !== 'assembling') return;
    const t = setTimeout(
      () => { if (phaseRef.current === 'assembling') setPhase('idle'); },
      (ASSEMBLE_DONE + 0.7) * 1000,
    );
    return () => clearTimeout(t);
  }, [phase]);

  /* 클릭 → 분산 후 슬라이드업 → onExitComplete */
  const handleClick = () => {
    if (phaseRef.current !== 'idle') return;
    setPhase('exiting');
    // scatter(0.7s) + slideUp delay(0.72s) + slideUp duration(0.55s) + buffer
    setTimeout(() => onExitComplete?.(), 1350);
  };

  const han   = LETTERS.slice(0, 3);
  const kyeol = LETTERS.slice(3);

  return (
    <Section $exiting={phase === 'exiting'} onClick={handleClick} id="hero">
      <ScanLine />

      <TextBlock $phase={phase}>
        <Greeting>Hello, I&apos;m</Greeting>
      </TextBlock>

      <NameRow>
        {han.map((l, i) => (
          <LetterSpan
            key={l.char}
            $phase={phase}
            $x={l.x} $y={l.y} $r={l.r} $delay={l.delay}
            $sx={SCATTER[i].x} $sy={SCATTER[i].y} $sr={SCATTER[i].r} $sdelay={SCATTER[i].delay}
          >
            {l.char}
          </LetterSpan>
        ))}

        <NameDivider />

        {kyeol.map((l, i) => (
          <LetterSpan
            key={l.char}
            $phase={phase}
            $x={l.x} $y={l.y} $r={l.r} $delay={l.delay}
            $sx={SCATTER[i + 3].x} $sy={SCATTER[i + 3].y} $sr={SCATTER[i + 3].r} $sdelay={SCATTER[i + 3].delay}
          >
            {l.char}
          </LetterSpan>
        ))}

        <Cursor>_</Cursor>
      </NameRow>

      <TextBlock $phase={phase}>
        <Role>Fullstack / Backend Developer</Role>
        <Description>
          Java · Spring Boot · Python을 주력으로 하는 개발자입니다.
          데이터 자동화, ERP 시스템, 웹 서비스 개발 경험을 보유하고 있으며
          실용적이고 유지보수하기 좋은 코드를 추구합니다.
        </Description>
      </TextBlock>

      <ClickHint>— CLICK ANYWHERE —</ClickHint>
    </Section>
  );
}

export default Hero;
