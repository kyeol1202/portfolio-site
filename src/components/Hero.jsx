import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const bounceY = keyframes`
  0%,100% { opacity: 0.2; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(6px); }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  background: linear-gradient(135deg, #0a0a0a 60%, #0d1b2a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(74,158,255,0.08) 0%, transparent 70%);
    top: -100px;
    right: -100px;
    border-radius: 50%;
    pointer-events: none;
  }
`;

const Greeting = styled.p`
  color: #4a9eff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  animation: ${fadeUp} 0.6s ease both;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  animation: ${fadeUp} 0.6s ease 0.1s both;
`;

const Cursor = styled.span`
  color: #4a9eff;
  animation: ${blink} 1s step-end infinite;
`;

const Role = styled.h2`
  font-size: clamp(1.1rem, 2.2vw, 1.8rem);
  font-weight: 500;
  color: #4a9eff;
  margin-top: 0.7rem;
  animation: ${fadeUp} 0.6s ease 0.2s both;
`;

const Description = styled.p`
  max-width: 540px;
  color: #aaa;
  line-height: 1.9;
  margin-top: 1.5rem;
  font-size: 1rem;
  animation: ${fadeUp} 0.6s ease 0.3s both;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.6s ease 0.4s both;
`;

const PrimaryBtn = styled.a`
  padding: 0.8rem 2rem;
  background: #4a9eff;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s, transform 0.2s;
  &:hover { background: #2d7dd2; transform: translateY(-2px); }
`;

const SecondaryBtn = styled.a`
  padding: 0.8rem 2rem;
  border: 1px solid #4a9eff;
  color: #4a9eff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
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
  animation: ${fadeUp} 1s ease 1s both;
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

function Hero() {
  return (
    <Section id="hero">
      <Greeting>안녕하세요, 저는</Greeting>
      <Name>김한결<Cursor>_</Cursor></Name>
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
