import styled, { keyframes } from 'styled-components';
import About from '../components/About.jsx';
import Reveal from '../components/Reveal.jsx';

/* ── 팔레트 ── */
const G = '#e8a045';   // 골드
const P = '#9b5de5';   // 퍼플
const BG    = '#08060e';
const SURF  = '#100c1c';
const CARD  = '#140f22';
const BORD  = '#1e1630';
const MUTED = '#9988aa';

/* ── 키프레임 ── */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const gridPan = keyframes`
  0%  { background-position: 0 0; }
  100%{ background-position: 80px 80px; }
`;

const orbPulse = keyframes`
  0%,100% { transform: scale(1);    opacity: .5; }
  50%     { transform: scale(1.12); opacity: .8; }
`;

const scrollBounce = keyframes`
  0%,100% { transform: translateY(0); opacity: .6; }
  50%     { transform: translateY(8px); opacity: 1; }
`;

const backGlow = keyframes`
  0%,100% { box-shadow: 0 0 10px ${G}44; }
  50%     { box-shadow: 0 0 28px ${G}99; }
`;

/* ── 전체 래퍼 ── */
const PageWrap = styled.div`
  background: ${BG};
  min-height: 100vh;
  color: #f0e8d8;
`;

/* ── HERO ── */
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 8%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(232,160,69,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,160,69,.03) 1px, transparent 1px);
    background-size: 80px 80px;
    animation: ${gridPan} 10s linear infinite;
    pointer-events: none;
  }
`;

const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3rem;
  padding-right: 2rem;

  @media (max-width: 768px) { display: none; }
`;

const VertLabel = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: .6rem;
  letter-spacing: .25em;
  text-transform: uppercase;
  color: ${G}88;
  font-weight: 700;
`;

const HeroRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3rem;
  border-left: 1px solid ${BORD};
  min-height: 60vh;
  animation: ${fadeIn} .5s ease .05s both;

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;
  }
`;

const HeroTag = styled.span`
  display: inline-block;
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: ${G};
  border: 1px solid ${G}44;
  padding: .3rem 1rem;
  border-radius: 20px;
  margin-bottom: 1.6rem;
  width: fit-content;
`;

const HeroName = styled.h1`
  font-size: clamp(3rem, 7vw, 6.5rem);
  font-weight: 900;
  letter-spacing: -.03em;
  line-height: 1;
  color: #fff;
  text-shadow: 0 0 40px ${G}33;
  margin-bottom: .3rem;
`;

const NameSep = styled.span`
  color: ${G};
  margin: 0 .1em;
  font-weight: 300;
`;

const HeroSub = styled.p`
  font-size: clamp(.95rem, 2vw, 1.4rem);
  color: ${P};
  font-weight: 400;
  letter-spacing: .07em;
  margin-top: .9rem;
  &::before { content: '// '; opacity: .5; }
`;

const HeroDesc = styled.p`
  max-width: 480px;
  color: ${MUTED};
  line-height: 1.9;
  margin-top: 1.6rem;
  font-size: .93rem;
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: ${orbPulse} 5s ease infinite;
`;

/* 스크롤 다운 힌트 */
const ScrollHint = styled.a`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .4rem;
  color: ${G}88;
  font-size: .6rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  svg {
    animation: ${scrollBounce} 1.5s ease infinite;
  }

  &:hover { color: ${G}; }
`;

/* ── 섹션 공통 ── */
const SecWrap = styled.section`
  padding: 6rem 10%;
  background: ${({ $alt }) => $alt ? SURF : BG};
`;

const SecTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: .5rem;
  span { color: ${G}; }
`;

const SecDivider = styled.div`
  width: 50px; height: 3px;
  background: linear-gradient(90deg, ${G}, ${P});
  margin-bottom: 3rem;
  border-radius: 2px;
`;

/* ── 작업 카드 ── */
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.4rem;
`;

const Card = styled.div`
  background: ${CARD};
  border: 1px solid ${BORD};
  border-radius: 14px;
  overflow: hidden;
  transition: border-color .2s, transform .2s;
  &:hover { border-color: ${G}; transform: translateY(-5px); }
`;

const Thumb = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: ${({ $bg }) => $bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
`;

const CardBody = styled.div`padding: 1.2rem 1.4rem;`;

const CardName = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: .4rem;
`;

const CardDesc = styled.p`
  color: ${MUTED};
  font-size: .83rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TagRow = styled.div`display: flex; flex-wrap: wrap; gap: .4rem;`;

const CTag = styled.span`
  background: rgba(232,160,69,.08);
  color: ${G};
  font-size: .72rem;
  padding: .2rem .6rem;
  border-radius: 20px;
  border: 1px solid rgba(232,160,69,.2);
`;

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .3rem;
  font-size: .78rem;
  color: ${G};
  text-decoration: none;
  border: 1px solid ${G}33;
  padding: .2rem .6rem;
  border-radius: 4px;
  margin-bottom: .8rem;
  transition: background .2s;
  &:hover { background: rgba(232,160,69,.1); }
`;

/* ── CONTACT ── */
const ContactWrap = styled.div`text-align: center;`;
const ContactSub  = styled.p`color: ${MUTED}; margin-bottom: 2.5rem; line-height: 1.7;`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const CLink = styled.a`
  display: flex; align-items: center; gap: .5rem;
  padding: .8rem 1.8rem;
  border: 1px solid ${BORD};
  border-radius: 8px;
  color: ${MUTED};
  text-decoration: none;
  font-size: .95rem;
  transition: border-color .2s, color .2s, transform .2s;
  &:hover { border-color: ${G}; color: ${G}; transform: translateY(-2px); }
`;

/* ── BACK ── */
const BackSec = styled.div`
  padding: 3rem 10% 5rem;
  background: ${BG};
  display: flex;
  justify-content: center;
  border-top: 1px solid ${BORD};
`;

const BackBtn = styled.button`
  display: flex; align-items: center; gap: .7rem;
  padding: .9rem 2.4rem;
  background: transparent;
  border: 1px solid ${G}55;
  border-radius: 8px;
  color: ${G};
  font-size: .95rem;
  font-weight: 600;
  letter-spacing: .06em;
  cursor: pointer;
  animation: ${backGlow} 2.5s ease infinite;
  transition: background .2s, transform .2s;
  &:hover { background: rgba(232,160,69,.1); transform: translateY(-2px); }
  svg { transition: transform .2s; }
  &:hover svg { transform: translateX(-4px); }
`;

/* ── 데이터 ── */
const personalWorks = [
  {
    name: '개인 작업 1',
    desc: '개인 3D 포트폴리오 작업물. 업데이트 예정.',
    icon: '🗿',
    bg: 'linear-gradient(135deg,#1a0a30,#2d1200)',
    tags: ['Blender', 'Substance Painter'],
    link: null,
  },
  {
    name: '개인 작업 2',
    desc: '캐릭터 디자인 및 리깅. 업데이트 예정.',
    icon: '🧊',
    bg: 'linear-gradient(135deg,#001a2a,#0a1a00)',
    tags: ['ZBrush', 'Maya'],
    link: null,
  },
  {
    name: '개인 작업 3',
    desc: '환경 아트 & 조명 연출. 업데이트 예정.',
    icon: '🌌',
    bg: 'linear-gradient(135deg,#0a001a,#1a0a00)',
    tags: ['Unreal Engine', 'Blender'],
    link: null,
  },
];

const projectWorks = [
  {
    name: 'AuRA — 향수 웹사이트',
    desc: '국내 향수 트렌드 기반 큐레이션 기능을 포함한 향수 쇼핑몰. 팀 리더 참여.',
    icon: '🌸',
    bg: 'linear-gradient(135deg,#1a0a20,#200a10)',
    tags: ['Figma', 'React.js', 'MariaDB'],
    link: 'https://github.com/kyeol1202/Team4-Project',
  },
  {
    name: '기업 수익성 자동분석 시스템',
    desc: 'DART → Python 정제 → 엑셀 출력 전 과정 자동화 파이프라인.',
    icon: '📊',
    bg: 'linear-gradient(135deg,#0a1a10,#1a1000)',
    tags: ['Python', 'BrityRPA', 'Excel'],
    link: null,
  },
  {
    name: '차세대 AI Solution ERP',
    desc: 'Spring 기반 인사·급여·매출·재무 통합 ERP. 팀장 참여.',
    icon: '🏗️',
    bg: 'linear-gradient(135deg,#0a0a20,#201000)',
    tags: ['Java', 'Spring', 'MariaDB'],
    link: 'https://github.com/ArLyehee/MainProjectERP',
  },
];

/* ── 컴포넌트 ── */
function ArtistPage({ onBackToDev }) {
  return (
    <PageWrap>

      {/* ── HERO ── */}
      <HeroSection id="a-top">
        <Orb style={{
          width: '500px', height: '500px',
          background: `radial-gradient(circle,${G}10 0%,transparent 65%)`,
          top: '-150px', right: '-100px',
        }} />
        <Orb style={{
          width: '300px', height: '300px',
          background: `radial-gradient(circle,${P}18 0%,transparent 65%)`,
          bottom: '50px', left: '-80px',
          animationDelay: '2.5s',
        }} />

        {/* 좌측 세로 레이블 */}
        <HeroLeft>
          <VertLabel>3D Artist · Game Graphic</VertLabel>
        </HeroLeft>

        {/* 우측 이름 + 소개 */}
        <HeroRight>
          <HeroTag>✦ 3D Artist Portfolio</HeroTag>
          <HeroName>
            Han<NameSep>·</NameSep>Kyeol
          </HeroName>
          <HeroSub>3D Artist / Game Graphic Designer</HeroSub>
          <HeroDesc>
            게임 그래픽과 3D 아트를 전공하며 모델링·텍스처·조명까지
            폭넓은 경험을 쌓았습니다. 게임잼 참가, 게임개발 기능경기대회 출전,
            디지털 아트 동아리 활동을 통해 창의적인 비주얼을 만들어왔습니다.
          </HeroDesc>
        </HeroRight>

        <ScrollHint href="#a-about">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          Scroll
        </ScrollHint>
      </HeroSection>

      {/* ── ABOUT ME (개발자 페이지와 동일) ── */}
      <div id="a-about">
        <About />
      </div>

      {/* ── 개인 작업 (포폴) ── */}
      <SecWrap id="a-personal" $alt>
        <Reveal>
          <SecTitle><span>#</span> Personal Works</SecTitle>
          <SecDivider />
        </Reveal>
        <CardGrid>
          {personalWorks.map((w, i) => (
            <Reveal key={w.name} delay={i * 0.12}>
              <Card>
                <Thumb $bg={w.bg}>{w.icon}</Thumb>
                <CardBody>
                  {w.link && (
                    <IconLink href={w.link} target="_blank">GitHub ↗</IconLink>
                  )}
                  <CardName>{w.name}</CardName>
                  <CardDesc>{w.desc}</CardDesc>
                  <TagRow>
                    {w.tags.map(t => <CTag key={t}>{t}</CTag>)}
                  </TagRow>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </CardGrid>
      </SecWrap>

      {/* ── 프로젝트 ── */}
      <SecWrap id="a-projects">
        <Reveal>
          <SecTitle><span>#</span> Projects</SecTitle>
          <SecDivider />
        </Reveal>
        <CardGrid>
          {projectWorks.map((w, i) => (
            <Reveal key={w.name} delay={i * 0.12}>
              <Card>
                <Thumb $bg={w.bg}>{w.icon}</Thumb>
                <CardBody>
                  {w.link && (
                    <IconLink href={w.link} target="_blank">GitHub ↗</IconLink>
                  )}
                  <CardName>{w.name}</CardName>
                  <CardDesc>{w.desc}</CardDesc>
                  <TagRow>
                    {w.tags.map(t => <CTag key={t}>{t}</CTag>)}
                  </TagRow>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </CardGrid>
      </SecWrap>

      {/* ── CONTACT ── */}
      <SecWrap $alt id="a-contact">
        <Reveal>
          <ContactWrap>
            <SecTitle><span>#</span> Contact</SecTitle>
            <SecDivider style={{ margin: '0 auto 1.5rem' }} />
            <ContactSub>작업 의뢰나 협업 문의는 편하게 연락해 주세요!</ContactSub>
          </ContactWrap>
        </Reveal>
        <Reveal delay={0.1}>
          <LinkGroup>
            <CLink href="mailto:kyeol1202@naver.com">📧 kyeol1202@naver.com</CLink>
            <CLink href="https://github.com/kyeol1202" target="_blank">🐙 github.com/kyeol1202</CLink>
          </LinkGroup>
        </Reveal>
      </SecWrap>

      {/* ── BACK BUTTON ── */}
      <BackSec>
        <BackBtn onClick={onBackToDev}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Developer Portfolio 로 돌아가기
        </BackBtn>
      </BackSec>

    </PageWrap>
  );
}

export default ArtistPage;