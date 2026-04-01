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
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;

  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const ACCENT_COLORS = ['#4a9eff', '#7b61ff', '#00c9a7'];

const Card = styled.div`
  background: #111;
  border: 1px solid #1e1e2e;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;

  &:hover {
    border-color: ${({ $color }) => $color};
    transform: translateY(-6px);
    box-shadow: 0 12px 40px ${({ $color }) => $color}18;
  }
`;

/* 상단 컬러 바 */
const AccentBar = styled.div`
  height: 3px;
  background: linear-gradient(90deg, ${({ $color }) => $color}, transparent);
`;

const CardBody = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectName = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
`;

const StatusBadge = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
  border: 1px solid ${({ $done }) => ($done ? 'rgba(0,201,167,0.4)' : 'rgba(74,158,255,0.4)')};
  color: ${({ $done }) => ($done ? '#00c9a7' : '#4a9eff')};
  background: ${({ $done }) => ($done ? 'rgba(0,201,167,0.06)' : 'rgba(74,158,255,0.06)')};
`;

const Period = styled.div`
  font-size: 0.75rem;
  color: #444;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 1px;
    background: #333;
  }
`;

const RoleBadge = styled.span`
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 600;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}12;
  border: 1px solid ${({ $color }) => $color}30;
  border-radius: 4px;
  padding: 2px 7px;
  margin-bottom: 0.85rem;
`;

const Description = styled.p`
  color: #888;
  font-size: 0.84rem;
  line-height: 1.75;
  margin-bottom: 1rem;
  flex: 1;
`;

const BulletList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1.2rem;
`;

const Bullet = styled.li`
  color: #aaa;
  font-size: 0.8rem;
  line-height: 1.55;
  display: flex;
  gap: 0.45rem;

  &::before {
    content: '▹';
    color: ${({ $color }) => $color};
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const Tag = styled.span`
  background: rgba(74,158,255,0.06);
  color: #4a9eff;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 20px;
  border: 1px solid rgba(74,158,255,0.18);
`;

const Links = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconLink = styled.a`
  color: #4a9eff;
  font-size: 0.75rem;
  text-decoration: none;
  border: 1px solid rgba(74,158,255,0.25);
  padding: 3px 10px;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover { background: rgba(74,158,255,0.1); }
`;

const projects = [
  {
    name: 'AuRA — 향수 쇼핑몰 웹 서비스',
    period: '2025.11 – 2025.12',
    role: '팀장',
    done: true,
    description: '국내 향수 트렌드 기반 큐레이션 기능을 포함한 향수 쇼핑몰. React.js 기반 SPA로 설계.',
    bullets: [
      'GitHub 브랜치 전략으로 코드 충돌 최소화',
      'ERD Cloud로 향수 카테고리/리뷰 중심 DB 스키마 설계',
      'Figma 와이어프레임 및 프로토타입 제작',
      'React.js 컴포넌트 재사용성/유지보수성 향상 구조 설계',
    ],
    tags: ['JavaScript', 'React.js', 'MariaDB', 'Figma'],
    github: 'https://github.com/kyeol1202/Team4-Project',
    demo: null,
  },
  {
    name: '기업별 수익성 자동분석 시스템',
    period: '2026.02 – 2026.03',
    role: '개발',
    done: true,
    description: '기업명 입력 → DART 접속 → 데이터 추출 → Python 가공 → 엑셀 생성까지 전 과정을 자동화한 RPA 파이프라인.',
    bullets: [
      'BrityRPA + Python 전 과정 자동화 파이프라인 구축',
      'Python 데이터 정제(Data Cleaning) 담당',
      '수작업 대비 가공 시간 약 90% 단축',
      '환경 의존성 최소화한 범용적 자동화 설계',
    ],
    tags: ['Python', 'JavaScript', 'BrityRPA', 'Excel'],
    github: null,
    demo: null,
  },
  {
    name: '수익관리 & AI 예측 ERP 시스템',
    period: '2026.03 – 2026.04',
    role: '팀장',
    done: true,
    description: 'Spring 기반 인사·급여·매출·재무를 통합하는 ERP 웹 시스템. 단방향 연쇄 데이터 구조 설계.',
    bullets: [
      '23개 테이블 관계 설계, 17개 트리거 + 5개 공통 프로시저 구축',
      '인사·급여·매출·재무 단방향 연쇄 구조 설계',
      '데이터 정합성 100% 확보 / 병합 충돌 0건',
      'Python + Google Analytics 기반 데이터 분석 및 시각화',
    ],
    tags: ['Java', 'Spring', 'MariaDB', 'Python'],
    github: 'https://github.com/ArLyehee/MainProjectERP',
    demo: null,
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
        {projects.map((p, i) => {
          const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
          return (
            <Reveal key={p.name} delay={i * 0.1}>
              <Card $color={color}>
                <AccentBar $color={color} />
                <CardBody>
                  <CardTop>
                    <ProjectName>{p.name}</ProjectName>
                    <StatusBadge $done={p.done}>{p.done ? '완료' : '진행중'}</StatusBadge>
                  </CardTop>

                  <Period>{p.period}</Period>
                  <RoleBadge $color={color}>{p.role}</RoleBadge>

                  <Description>{p.description}</Description>

                  <BulletList>
                    {p.bullets.map((b) => (
                      <Bullet key={b} $color={color}>{b}</Bullet>
                    ))}
                  </BulletList>

                  <CardFooter>
                    <Tags>
                      {p.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                    </Tags>
                    <Links>
                      {p.github && (
                        <IconLink href={p.github} target="_blank" rel="noreferrer">
                          GitHub
                        </IconLink>
                      )}
                      {p.demo && (
                        <IconLink href={p.demo} target="_blank" rel="noreferrer">
                          Demo
                        </IconLink>
                      )}
                    </Links>
                  </CardFooter>
                </CardBody>
              </Card>
            </Reveal>
          );
        })}
      </Grid>
    </Section>
  );
}

export default Projects;
