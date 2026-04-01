import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 10%;
  background: #0d0d0d;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;

  span {
    color: #4a9eff;
  }
`;

const Divider = styled.div`
  width: 50px;
  height: 3px;
  background: #4a9eff;
  margin-bottom: 3rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.p`
  color: #aaa;
  line-height: 1.9;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const InfoItem = styled.li`
  color: #ccc;
  font-size: 0.95rem;

  span {
    color: #4a9eff;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

function About() {
  return (
    <Section id="about">
      <Title><span>#</span> About Me</Title>
      <Divider />
      <Content>
        <div>
          <Text>
            안녕하세요! 백엔드 개발자를 목표로 열심히 공부하고 있는 개발자입니다.
          </Text>
          <Text>
            Java와 Spring Boot를 중심으로 REST API 설계, 데이터베이스 연동,
            인증/인가 구현 등의 경험을 쌓아가고 있습니다.
            코드의 가독성과 유지보수성을 중요하게 생각합니다.
          </Text>
          <Text>
            새로운 기술을 배우는 것을 즐기며, 꾸준히 성장하는 개발자가 되고자 합니다.
          </Text>
        </div>
        <InfoList>
          <InfoItem><span>▹</span> 이름: 홍길동</InfoItem>
          <InfoItem><span>▹</span> 이메일: kyeol9927@gmail.com</InfoItem>
          <InfoItem><span>▹</span> GitHub: github.com/kyeol1202</InfoItem>
          <InfoItem><span>▹</span> 주력 언어: Java, JavaScript</InfoItem>
          <InfoItem><span>▹</span> 관심 분야: Backend, Cloud, MSA</InfoItem>
        </InfoList>
      </Content>
    </Section>
  );
}

export default About;