import styled from 'styled-components';
import Reveal from './Reveal.jsx';

const Section = styled.section`
  padding: 6rem 10%;
  background: #0d0d0d;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #111;
  border: 1px solid #1e1e2e;
  border-radius: 12px;
  padding: 1.8rem;
  transition: border-color 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  &:hover { border-color: #4a9eff; transform: translateY(-5px); }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const ProjectName = styled.h3`
  color: #fff;
  font-size: 1.05rem;
  font-weight: 700;
`;

const Period = styled.span`
  color: #555;
  font-size: 0.78rem;
  white-space: nowrap;
  margin-left: 0.5rem;
`;

const Links = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const IconLink = styled.a`
  color: #4a9eff;
  font-size: 0.82rem;
  text-decoration: none;
  border: 1px solid rgba(74,158,255,0.3);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover { background: rgba(74,158,255,0.1); }
`;

const Description = styled.p`
  color: #999;
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  flex: 1;
`;

const BulletList = styled.ul`
  list-style: none;
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Bullet = styled.li`
  color: #aaa;
  font-size: 0.83rem;
  line-height: 1.5;
  &::before { content: '▹ '; color: #4a9eff; }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
`;

const Tag = styled.span`
  background: rgba(74,158,255,0.08);
  color: #4a9eff;
  font-size: 0.73rem;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  border: 1px solid rgba(74,158,255,0.2);
`;

const projects = [
  {
    name: 'AuRA — 향수 웹사이트',
    period: '2025.11 ~ 2025.12',
    description: '국내 향수 트렌드 기반 큐레이션 기능을 포함한 향수 쇼핑몰 웹 서비스. 팀 리더로 참여.',
    bullets: [
      'GitHub 브랜치 전략 수립으로 코드 충돌 최소화',
      'ERD Cloud로 향수 카테고리/리뷰 중심 DB 스키마 설계',
      'Figma 와이어프레임 및 프로토타입 설계',
      'React.js 컴포넌트 재사용성/유지보수성 향상 구조 설계',
    ],
    tags: ['JavaScript', 'React.js', 'MariaDB', 'Figma', 'GitHub'],
    github: 'https://github.com/kyeol1202/Team4-Project',
    demo: null,
  },
  {
    name: '기업별 수익성 자동분석 시스템',
    period: '2026.02 ~ 2026.03',
    description: '기업명 입력 → DART 접속 → 데이터 추출 → Python 가공 → 엑셀 생성까지 전 과정을 자동화한 RPA 파이프라인.',
    bullets: [
      '전 과정 자동화 파이프라인 구축 (BrityRPA + Python)',
      'Python 데이터 정제(Data Cleaning) 담당',
      '수작업 대비 데이터 가공 시간 약 90% 단축',
      '환경 의존성 최소화한 범용적 자동화 설계',
    ],
    tags: ['Python', 'JavaScript', 'BrityRPA', 'Excel'],
    github: null,
    demo: null,
  },
  {
    name: '수익관리 & 예측 차세대 AI Solution (ERP)',
    period: '2026.03 ~ 2026.04',
    description: 'Spring 기반 인사·급여·매출·재무를 통합하는 ERP 웹 시스템. 팀장으로 참여.',
    bullets: [
      '23개 테이블 관계 설계, 17개 트리거 + 5개 공통 프로시저 구축',
      '인사·급여·매출·재무 단방향 연쇄 구조 설계',
      '데이터 정합성 100% 확보 / 병합 충돌 0건',
      'Python + Google Analytics 데이터 분석 및 Excel 시각화',
    ],
    tags: ['Java', 'Spring', 'MariaDB', 'Python', 'GitHub'],
    github: 'https://github.com/ArLyehee/MainProjectERP',
    demo: null,
  },
];

function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <Title><span>#</span> Projects</Title>
        <Divider />
      </Reveal>
      <Grid>
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.12}>
            <Card>
              <CardTop>
                <ProjectName>{project.name}</ProjectName>
                <Period>{project.period}</Period>
              </CardTop>
              <Links>
                {project.github && <IconLink href={project.github} target="_blank">GitHub</IconLink>}
                {project.demo && <IconLink href={project.demo} target="_blank">Demo</IconLink>}
              </Links>
              <Description>{project.description}</Description>
              <BulletList>
                {project.bullets.map((b) => <Bullet key={b}>{b}</Bullet>)}
              </BulletList>
              <Tags>
                {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </Tags>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;
