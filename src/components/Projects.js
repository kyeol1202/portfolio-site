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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #111;
  border: 1px solid #1e1e2e;
  border-radius: 12px;
  padding: 1.8rem;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: #4a9eff;
    transform: translateY(-4px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ProjectName = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Links = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const IconLink = styled.a`
  color: #888;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #4a9eff;
  }
`;

const Description = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(74, 158, 255, 0.1);
  color: #4a9eff;
  font-size: 0.75rem;
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
  border: 1px solid rgba(74, 158, 255, 0.2);
`;

const projects = [
  {
    name: '프로젝트 1',
    description: '여기에 프로젝트 설명을 입력하세요. 어떤 문제를 해결했는지, 주요 기능이 무엇인지 간략히 작성합니다.',
    tags: ['Spring Boot', 'MySQL', 'JWT'],
    github: '#',
    demo: '#',
  },
  {
    name: '프로젝트 2',
    description: '여기에 프로젝트 설명을 입력하세요. 어떤 문제를 해결했는지, 주요 기능이 무엇인지 간략히 작성합니다.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    name: '프로젝트 3',
    description: '여기에 프로젝트 설명을 입력하세요. 어떤 문제를 해결했는지, 주요 기능이 무엇인지 간략히 작성합니다.',
    tags: ['Java', 'Spring', 'Docker'],
    github: '#',
    demo: null,
  },
];

function Projects() {
  return (
    <Section id="projects">
      <Title><span>#</span> Projects</Title>
      <Divider />
      <Grid>
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader>
              <ProjectName>{project.name}</ProjectName>
              <Links>
                <IconLink href={project.github} target="_blank">GitHub</IconLink>
                {project.demo && <IconLink href={project.demo} target="_blank">Demo</IconLink>}
              </Links>
            </CardHeader>
            <Description>{project.description}</Description>
            <Tags>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;