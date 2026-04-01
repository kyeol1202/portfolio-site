import styled from 'styled-components';
import Reveal from './Reveal.jsx';

const Section = styled.section`
  padding: 6rem 10%;
  background: #0a0a0a;
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
  margin-bottom: 3rem;
`;

const Category = styled.div`
  margin-bottom: 2.5rem;
`;

const CategoryTitle = styled.h3`
  color: #4a9eff;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Tag = styled.div`
  background: #111;
  border: 1px solid #1e1e2e;
  border-radius: 8px;
  padding: 0.6rem 1.1rem;
  color: #ccc;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
  &:hover { border-color: #4a9eff; color: #fff; transform: translateY(-3px); }
`;

const categories = [
  {
    label: '개발 언어',
    items: [
      { icon: '☕', name: 'Java' },
      { icon: '🐍', name: 'Python' },
      { icon: '🟨', name: 'JavaScript' },
      { icon: '📊', name: 'R' },
      { icon: '📱', name: 'React Native' },
    ],
  },
  {
    label: '프레임워크 / 라이브러리',
    items: [
      { icon: '🍃', name: 'Spring Boot' },
      { icon: '⚛️', name: 'React.js' },
    ],
  },
  {
    label: '데이터베이스',
    items: [
      { icon: '🗄️', name: 'MariaDB' },
      { icon: '🔥', name: 'Firebase' },
    ],
  },
  {
    label: '개발 도구',
    items: [
      { icon: '🔵', name: 'VSCode' },
      { icon: '🌑', name: 'Eclipse / STS' },
      { icon: '🤖', name: 'Android Studio' },
      { icon: '📐', name: 'DBeaver' },
      { icon: '🎨', name: 'Figma' },
      { icon: '☁️', name: 'ERD Cloud' },
    ],
  },
  {
    label: '기타',
    items: [
      { icon: '🐙', name: 'Git / GitHub' },
      { icon: '🤖', name: 'Brity RPA' },
      { icon: '📝', name: 'Notion' },
    ],
  },
];

function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <Title><span>#</span> Skills</Title>
        <Divider />
      </Reveal>
      {categories.map((cat, i) => (
        <Reveal key={cat.label} delay={i * 0.1}>
          <Category>
            <CategoryTitle>{cat.label}</CategoryTitle>
            <Grid>
              {cat.items.map((item) => (
                <Tag key={item.name}>
                  <span>{item.icon}</span>
                  {item.name}
                </Tag>
              ))}
            </Grid>
          </Category>
        </Reveal>
      ))}
    </Section>
  );
}

export default Skills;
