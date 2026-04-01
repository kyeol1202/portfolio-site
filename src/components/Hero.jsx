import styled, { keyframes, css } from 'styled-components';

/* ── 각 글자별 조립 애니메이션 생성 ── */
const makeAssemble = (x, y, r) => keyframes`
  0% {
    transform: translate(${x}px, ${y}px) rotate(${r}deg) scale(0.3);
    opacity: 0;
    color: #4a9eff;
    text-shadow: 0 0 30px #4a9eff, 0 0 60px #4a9eff;
    filter: blur(8px);
  }
  55% {
    opacity: 1;
    filter: blur(0);
    color: #a0d4ff;
  }
  72% {
    transform: translate(${-x * 0.05}px, ${-y * 0.05}px) rotate(${-r * 0.05}deg) scale(1.08);
    text-shadow: 0 0 60px #4a9eff, 0 0 120px #4a9eff, 0 0 200px #4a9eff;
    color: #fff;
  }
  88% {
    transform: translate(${x * 0.015}px, ${y * 0.015}px) rotate(${r * 0.015}deg) scale(0.96);
    color: #e0f0ff;
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1;
    color: #ffffff;
    text-shadow: 0 0 12px rgba(74, 158, 255, 0.6);
    filter: blur(0);
  }
`;

/* 조립 완료 후 이름 전체 펄스 */
const namePulse = keyframes`
  0%   { text-shadow: 0 0 12px rgba(74,158,255,0.6); }
  50%  { text-shadow: 0 0 40px rgba(74,158,255,1), 0 0 80px rgba(74,158,255,0.5); }
  100% { text-shadow: 0 0 12px rgba(74,158,255,0.6); }
`;

/* 조립 후 스캔 라인 */
const scanSlide = keyframes`
  0%   { top: 0%; opacity: 0.9; }
  100% { top: 100%; opacity: 0; }
`;

/* 배경 에너지 격자 흐름 */
const gridFlow = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: 80px 80px; }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const bounceY = keyframes`
  0%, 100% { opacity: 0.2; transform: translateY(0); }
  50%       { opacity: 1;   transform: translateY(6px); }
`;

/* ── 글자 데이터: 시작 위치(x, y), 회전(r), 딜레이 ── */
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

/* 조립 완료 시점 = 마지막 딜레이 + 애니메이션 길이 */
const ASSEMBLE_DONE = 0.90 + 1.0; // ~1.9s

/* ── Styled Components ── */

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  background:
    linear-gradient(135deg, #060810 55%, #0a1628 100%);
  position: relative;
  overflow: hidden;

  /* 에너지 격자 배경 */
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

  /* 코너 글로우 */
  &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(74,158,255,0.07) 0%, transparent 65%);
    top: -150px;
    right: -150px;
    border-radius: 50%;
    pointer-events: none;
  }
`;

/* 조립 완료 후 흐르는 스캔 라인 */
const ScanLine = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4a9eff, transparent);
  animation: ${scanSlide} 0.7s ease-out ${ASSEMBLE_DONE + 0.05}s both;
  pointer-events: none;
  z-index: 10;
`;

const NameRow = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 1;
  /* 조립 완료 후 전체 이름 펄스 */
  animation: ${namePulse} 2s ease ${ASSEMBLE_DONE + 0.15}s 2;
`;

const LetterSpan = styled.span`
  display: inline-block;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  font-family: 'Segoe UI', 'Roboto', sans-serif;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-shadow: 0 0 12px rgba(74,158,255,0.6);

  ${({ $x, $y, $r, $delay }) => css`
    animation: ${makeAssemble($x, $y, $r)} 1s cubic-bezier(0.22, 1, 0.36, 1) ${$delay}s both;
  `}
`;

/* "Han" / "Kyeol" 사이 구분선 (조립 잠금 이음새 느낌) */
const Divider = styled.span`
  display: inline-block;
  width: 3px;
  height: clamp(2rem, 5vw, 4.5rem);
  background: linear-gradient(180deg, transparent, #4a9eff, transparent);
  margin: 0 0.15em;
  border-radius: 2px;
  opacity: 0;
  animation: ${fadeUp} 0.3s ease ${ASSEMBLE_DONE}s both;
  box-shadow: 0 0 10px #4a9eff;
  align-self: center;
`;

const Cursor = styled.span`
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  font-weight: 900;
  color: #4a9eff;
  animation: ${blink} 1s step-end infinite;
  margin-left: 2px;
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

  &::before {
    content: '// ';
    opacity: 0.5;
  }
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${fadeUp} 0.5s ease ${ASSEMBLE_DONE + 0.6}s both;
`;

const PrimaryBtn = styled.a`
  padding: 0.8rem 2rem;
  background: #4a9eff;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  transition: background 0.2s, transform 0.2s;
  &:hover { background: #2d7dd2; transform: translateY(-2px); }
`;

const SecondaryBtn = styled.a`
  padding: 0.8rem 2rem;
  border: 1px solid #4a9eff;
  color: #4a9eff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  transition: background 0.2s, transform 0.2s;
  &:hover { background: rgba(74,158,255,0.1); transform: translateY(-2px); }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  opacity: 0;
  animation: ${fadeUp} 0.8s ease ${ASSEMBLE_DONE + 1}s both;
`;

const ScrollDot = styled.div`
  width: 6px;
  height: 6px;
  background: #4a9eff;
  border-radius: 50%;
  animation: ${bounceY} 1.4s ease infinite;
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
`;

/* ── Component ── */
function Hero() {
  const han   = LETTERS.slice(0, 3);  // H a n
  const kyeol = LETTERS.slice(3);     // K y e o l

  return (
    <Section id="hero">
      <ScanLine />

      <Greeting>Hello, I&apos;m</Greeting>

      <NameRow>
        {han.map((l) => (
          <LetterSpan key={l.char} $x={l.x} $y={l.y} $r={l.r} $delay={l.delay}>
            {l.char}
          </LetterSpan>
        ))}

        <Divider />

        {kyeol.map((l) => (
          <LetterSpan key={l.char} $x={l.x} $y={l.y} $r={l.r} $delay={l.delay}>
            {l.char}
          </LetterSpan>
        ))}

        <Cursor>_</Cursor>
      </NameRow>

      <Role>Fullstack / Backend Developer</Role>

      <Description>
        Java · Spring Boot · Python을 주력으로 하는 개발자입니다.
        데이터 자동화, ERP 시스템, 웹 서비스 개발 경험을 보유하고 있으며
        실용적이고 유지보수하기 좋은 코드를 추구합니다.
      </Description>

      <ButtonGroup>
        <PrimaryBtn href="#projects">프로젝트 보기</PrimaryBtn>
        <SecondaryBtn href="#contact">연락하기</SecondaryBtn>
      </ButtonGroup>

      <ScrollHint>
        <ScrollDot />
        <ScrollDot />
        <ScrollDot />
      </ScrollHint>
    </Section>
  );
}

export default Hero;
