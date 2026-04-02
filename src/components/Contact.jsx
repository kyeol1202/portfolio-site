import styled from 'styled-components';
import Reveal from './Reveal.jsx';

const Section = styled.section`
  padding: 6rem 10%;
  background: #0a0a0a;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  span { color: #4a9eff; }
`;

const Divider = styled.div`
  width: 50px;
  height: 3px;
  background: #4a9eff;
  margin: 0 auto 2rem;
`;

const SubText = styled.p`
  color: #aaa;
  font-size: 1rem;
  margin-bottom: 3rem;
  line-height: 1.7;
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  border: 1px solid #1e1e2e;
  border-radius: 8px;
  color: #ccc;
  text-decoration: none;
  font-size: 0.95rem;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
  &:hover { border-color: #4a9eff; color: #4a9eff; transform: translateY(-2px); }
`;

const Footer = styled.footer`
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid #1e1e2e;
  color: #555;
  font-size: 0.85rem;
`;

function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <Title><span>#</span> Contact</Title>
        <Divider />
        <SubText>
          새로운 기회나 협업에 관심이 있으시면 편하게 연락해 주세요!
        </SubText>
      </Reveal>
      <Reveal delay={0.1}>
        <LinkGroup>
          <ContactLink href="mailto:kyeol1202@naver.com">
            📧 kyeol1202@naver.com
          </ContactLink>
          <ContactLink href="https://github.com/kyeol1202" target="_blank">
            🐙 github.com/kyeol1202
          </ContactLink>
        </LinkGroup>
      </Reveal>
    </Section>
  );
}

export default Contact;
