import styled from 'styled-components';
import Reveal from './Reveal.jsx';

const Section = styled.section`
  padding: 6rem 10%;
  background: #0d0d0d;
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.4rem;

  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const Card = styled.div`
  background: #111;
  border: 1px solid #1e1e2e;
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
  &:hover {
    border-color: #4a9eff;
    transform: translateY(-5px);
  }
`;

const Thumb = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: ${({ $bg }) => $bg};
`;

const CardBody = styled.div`
  padding: 1.2rem 1.4rem;
`;

const GitLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.78rem;
  color: #4a9eff;
  text-decoration: none;
  border: 1px solid rgba(74,158,255,0.25);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  margin-bottom: 0.8rem;
  transition: background 0.2s;
  &:hover { background: rgba(74,158,255,0.1); }
`;

const CardName = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

const CardDesc = styled.p`
  color: #888;
  font-size: 0.83rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  background: rgba(74,158,255,0.06);
  color: #4a9eff;
  font-size: 0.72rem;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  border: 1px solid rgba(74,158,255,0.18);
`;

const BG = [
  'linear-gradient(135deg,#0a1628,#1a0a28)',
  'linear-gradient(135deg,#0a1a10,#1a1000)',
  'linear-gradient(135deg,#0a0a20,#201000)',
];

const projects = [
  {
    name: 'AuRA — 향수 쇼핑몰 웹 서비스',
    description: '국내 향수 트렌드 기반 큐레이션 기능을 포함한 향수 쇼핑몰. React.js 기반 SPA로 설계.',
    tags: ['JavaScript', 'React.js', 'MariaDB', 'Figma'],
    github: 'https://github.com/kyeol1202/Team4-Project',
  },
  {
    name: '기업별 수익성 자동분석 시스템',
    description: '기업명 입력 → DART 접속 → 데이터 추출 → Python 가공 → 엑셀 생성까지 전 과정을 자동화한 RPA 파이프라인.',
    tags: ['Python', 'JavaScript', 'BrityRPA', 'Excel'],
    github: null,
  },
  {
    name: '수익관리 & AI 예측 ERP 시스템',
    description: 'Spring 기반 인사·급여·매출·재무를 통합하는 ERP 웹 시스템. 단방향 연쇄 데이터 구조 설계.',
    tags: ['Java', 'Spring', 'MariaDB', 'Python'],
    github: 'https://github.com/ArLyehee/MainProjectERP',
  },
];

function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionTitle><span>#</span> Projects</SectionTitle>
        <TitleDivider />
      </Reveal>

      <Grid>
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <Card>
              <Thumb $bg={BG[i % BG.length]} />
              <CardBody>
                {p.github && (
                  <GitLink href={p.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </GitLink>
                )}
                <CardName>{p.name}</CardName>
                <CardDesc>{p.description}</CardDesc>
                <TagRow>
                  {p.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </TagRow>
              </CardBody>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;