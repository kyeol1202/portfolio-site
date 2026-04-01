import styled from 'styled-components';
import Reveal from './Reveal.jsx';

const Section = styled.section`
  padding: 6rem 10%;
  background: #0a0a0a;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  span { color: #4a9eff; }
`;

const TitleDivider = styled.div`
  width: 50px;
  height: 3px;
  background: #4a9eff;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const CategoryCard = styled.div`
  background: #111;
  border: 1px solid #1e1e2e;
  border-radius: 14px;
  padding: 1.5rem;
  transition: border-color 0.2s;
  &:hover { border-color: rgba(74,158,255,0.3); }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
`;

const CategoryIcon = styled.span`
  font-size: 1.1rem;
`;

const CategoryLabel = styled.h3`
  font-size: 0.72rem;
  font-weight: 700;
  color: #4a9eff;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const SkillRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const SkillLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-width: 0;
`;

const SkillEmoji = styled.span`
  font-size: 1rem;
  flex-shrink: 0;
`;

const SkillName = styled.span`
  font-size: 0.88rem;
  color: #ccc;
  font-weight: 500;
  white-space: nowrap;
`;

const Dots = styled.div`
  display: flex;
  gap: 4px;
  flex-shrink: 0;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $filled }) => ($filled ? '#4a9eff' : '#1e1e2e')};
  box-shadow: ${({ $filled }) => ($filled ? '0 0 6px rgba(74,158,255,0.6)' : 'none')};
`;

/* ── 데이터 ── */
const categories = [
  {
    icon: '⌨️',
    label: '개발 언어',
    skills: [
      { emoji: '☕', name: 'Java',         level: 4 },
      { emoji: '🐍', name: 'Python',       level: 4 },
      { emoji: '🟨', name: 'JavaScript',   level: 3 },
      { emoji: '📊', name: 'R',            level: 2 },
      { emoji: '📱', name: 'React Native', level: 2 },
    ],
  },
  {
    icon: '🧩',
    label: '프레임워크 / 라이브러리',
    skills: [
      { emoji: '🍃', name: 'Spring Boot', level: 4 },
      { emoji: '⚛️', name: 'React.js',   level: 3 },
    ],
  },
  {
    icon: '🗄️',
    label: '데이터베이스',
    skills: [
      { emoji: '🐬', name: 'MariaDB',  level: 4 },
      { emoji: '🔥', name: 'Firebase', level: 2 },
    ],
  },
  {
    icon: '🛠️',
    label: '개발 도구',
    skills: [
      { emoji: '🔵', name: 'VSCode',           level: 5 },
      { emoji: '🌑', name: 'Eclipse / STS',    level: 4 },
      { emoji: '🤖', name: 'Android Studio',   level: 2 },
      { emoji: '📐', name: 'DBeaver',           level: 3 },
      { emoji: '🎨', name: 'Figma',            level: 3 },
    ],
  },
  {
    icon: '⚙️',
    label: '기타',
    skills: [
      { emoji: '🐙', name: 'Git / GitHub', level: 4 },
      { emoji: '🤖', name: 'Brity RPA',   level: 3 },
      { emoji: '📝', name: 'Notion',      level: 4 },
      { emoji: '☁️', name: 'ERD Cloud',  level: 3 },
    ],
  },
  {
    icon: '🎨',
    label: '디자인 / 그래픽',
    skills: [
      { emoji: '🖼️', name: 'Photoshop',    level: 4 },
      { emoji: '✏️', name: 'Illustrator', level: 3 },
      { emoji: '💡', name: '3D Modeling',  level: 2 },
    ],
  },
];

function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionTitle><span>#</span> Skills</SectionTitle>
        <TitleDivider />
      </Reveal>

      <Grid>
        {categories.map((cat, i) => (
          <Reveal key={cat.label} delay={i * 0.08}>
            <CategoryCard>
              <CategoryHeader>
                <CategoryIcon>{cat.icon}</CategoryIcon>
                <CategoryLabel>{cat.label}</CategoryLabel>
              </CategoryHeader>

              <SkillList>
                {cat.skills.map((skill) => (
                  <SkillRow key={skill.name}>
                    <SkillLeft>
                      <SkillEmoji>{skill.emoji}</SkillEmoji>
                      <SkillName>{skill.name}</SkillName>
                    </SkillLeft>
                    <Dots>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Dot key={n} $filled={n <= skill.level} />
                      ))}
                    </Dots>
                  </SkillRow>
                ))}
              </SkillList>
            </CategoryCard>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}

export default Skills;
