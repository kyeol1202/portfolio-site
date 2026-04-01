import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 10%;
  background: #0a0a0a;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled.div`
  background: #111;
  border: 1px solid #1e1e2e;
  border-radius: 10px;
  padding: 1.2rem 1rem;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: #4a9eff;
    transform: translateY(-4px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.p`
  color: #ccc;
  font-size: 0.85rem;
  font-weight: 500;
`;

const skills = [
  { icon: '☕', name: 'Java' },
  { icon: '🍃', name: 'Spring Boot' },
  { icon: '🗄️', name: 'MySQL' },
  { icon: '🐳', name: 'Docker' },
  { icon: '🐙', name: 'Git' },
  { icon: '⚛️', name: 'React' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🐍', name: 'Python' },
];

function Skills() {
  return (
    <Section id="skills">
      <Title><span>#</span> Skills</Title>
      <Divider />
      <Grid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Grid>
    </Section>
  );
}

export default Skills;