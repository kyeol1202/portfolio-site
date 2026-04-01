import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  background: linear-gradient(135deg, #0a0a0a 60%, #0d1b2a 100%);
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

const Role = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 600;
  color: #888;
  margin-top: 0.5rem;
  animation: ${fadeUp} 0.6s ease 0.2s both;
`;

const Description = styled.p`
  max-width: 500px;
  color: #aaa;
  line-height: 1.8;
  margin-top: 1.5rem;
  animation: ${fadeUp} 0.6s ease 0.3s both;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
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

  &:hover {
    background: #2d7dd2;
    transform: translateY(-2px);
  }
`;

const SecondaryBtn = styled.a`
  padding: 0.8rem 2rem;
  border: 1px solid #4a9eff;
  color: #4a9eff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: rgba(74, 158, 255, 0.1);
    transform: translateY(-2px);
  }
`;

function Hero() {
  return (
    <Section id="hero">
      <Greeting>안녕하세요, 저는</Greeting>
      <Name>홍길동</Name>
      <Role>Backend Developer</Role>
      <Description>
        Java & Spring Boot를 주력으로 하는 백엔드 개발자입니다.
        안정적이고 확장 가능한 서버 아키텍처를 만드는 것을 좋아합니다.
      </Description>
      <ButtonGroup>
        <PrimaryBtn href="#projects">프로젝트 보기</PrimaryBtn>
        <SecondaryBtn href="#contact">연락하기</SecondaryBtn>
      </ButtonGroup>
    </Section>
  );
}

export default Hero;