import { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ArtistAbout from '../components/ArtistAbout.jsx';
import Reveal from '../components/Reveal.jsx';

/* ── 팔레트 ── */
const G = '#e8a045';
const P = '#9b5de5';
const B = '#4a9eff';
const BG    = '#08060e';
const SURF  = '#100c1c';
const CARD  = '#140f22';
const BORD  = '#1e1630';
const MUTED = '#9988aa';

/* ── 공통 키프레임 ── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const gridPan = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: 80px 80px; }
`;

const orbPulse = keyframes`
  0%,100% { transform: scale(1);    opacity: .5; }
  50%     { transform: scale(1.12); opacity: .8; }
`;

const clickPulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.9; }
`;

const landingSlideUp = keyframes`
  from { transform: translateY(0); }
  to   { transform: translateY(-100vh); }
`;

const sweepOut = keyframes`
  0%   { opacity: 1; transform: translateX(0) skewX(0deg); }
  40%  { opacity: 0.5; transform: translateX(40px) skewX(5deg); }
  100% { opacity: 0; transform: translateX(140px) skewX(10deg); }
`;

const devAppear = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const devGlow = keyframes`
  0%,100% { box-shadow: 0 0 10px ${B}44, inset 0 0 10px ${B}11; }
  50%      { box-shadow: 0 0 28px ${B}88, inset 0 0 20px ${B}22; }
`;

const backGlow = keyframes`
  0%,100% { box-shadow: 0 0 10px ${G}44; }
  50%      { box-shadow: 0 0 28px ${G}99; }
`;

/* ────────────────────────────────
   LANDING SECTION
──────────────────────────────── */
const LandingSection = styled.section`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8%;
  background: ${BG};
  z-index: 50;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(232,160,69,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,160,69,.04) 1px, transparent 1px);
    background-size: 80px 80px;
    animation: ${gridPan} 8s linear infinite;
    pointer-events: none;
  }

  ${({ $exiting }) => $exiting && css`
    animation: ${landingSlideUp} 0.55s cubic-bezier(0.6, 0, 0.9, 0.4) 0.3s both;
  `}
`;

const LandingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: ${orbPulse} 5s ease infinite;
`;

/* 우측 텍스트 블록 — 왼쪽에서 55% 이상 밀어서 배치 */
const LandingContent = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeUp} 0.6s ease 0.1s both;

  ${({ $exiting }) => $exiting && css`
    animation: ${sweepOut} 0.45s ease-in 0.04s forwards;
  `}

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LandingTag = styled.span`
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

const LandingName = styled.h1`
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

const LandingSub = styled.p`
  font-size: clamp(.95rem, 2vw, 1.4rem);
  color: ${P};
  font-weight: 400;
  letter-spacing: .07em;
  margin-top: .9rem;
  &::before { content: '// '; opacity: .5; }
`;

const LandingDesc = styled.p`
  max-width: 480px;
  color: ${MUTED};
  line-height: 1.9;
  margin-top: 1.6rem;
  font-size: .93rem;
`;

/* 하단 클릭 힌트 */
const ClickHint = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${G};
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow: 0 0 10px ${G}bb;
  opacity: 0;
  animation:
    ${fadeUp}    0.5s ease 0.6s    forwards,
    ${clickPulse} 2s  ease 1.1s   infinite;
  pointer-events: none;
`;

/* 좌측 Developer 버튼 — Hero의 ArtistBtn 미러 */
const DevBtn = styled.button`
  position: absolute;
  left: 4%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1.4rem 1rem;
  background: rgba(74,158,255,0.06);
  border: 1px solid rgba(74,158,255,0.35);
  border-radius: 12px;
  cursor: pointer;
  color: ${B};
  opacity: 0;
  animation:
    ${devAppear} 0.6s ease 0.3s forwards,
    ${devGlow}   2.5s ease 0.9s infinite;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: rgba(74,158,255,0.14);
    transform: translateY(-50%) scale(1.05);
  }
  z-index: 10;
`;

const DevBtnIcon = styled.div`
  font-size: 1.8rem;
  line-height: 1;
`;

const DevBtnLabel = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  white-space: nowrap;
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

const DevBtnArrow = styled.div`
  font-size: 0.9rem;
  opacity: 0.7;
`;

/* ────────────────────────────────
   PORTFOLIO 섹션들
──────────────────────────────── */
const PageWrap = styled.div`
  background: ${BG};
  min-height: 100vh;
  color: #f0e8d8;
`;

/* ── 아티스트 Navbar ── */
const ArtistNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(8,6,14,0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid ${BORD};
`;

const NavLogo = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${G};
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #e0d8cc;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
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

/* ── Skills ── */
const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const SkillCard = styled.div`
  background: ${CARD};
  border: 1px solid ${BORD};
  border-radius: 14px;
  padding: 1.5rem;
  transition: border-color 0.2s;
  &:hover { border-color: ${G}55; }
`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
`;

const SkillCardIcon = styled.span`font-size: 1.1rem;`;

const SkillCardLabel = styled.h3`
  font-size: 0.72rem;
  font-weight: 700;
  color: ${G};
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

const SkillEmoji = styled.span`font-size: 1rem; flex-shrink: 0;`;
const SkillName  = styled.span`font-size: 0.88rem; color: #ccc; font-weight: 500; white-space: nowrap;`;

const Dots = styled.div`display: flex; gap: 4px; flex-shrink: 0;`;
const Dot  = styled.div`
  width: 7px; height: 7px;
  border-radius: 50%;
  background: ${({ $f }) => ($f ? G : BORD)};
  box-shadow: ${({ $f }) => ($f ? `0 0 6px ${G}99` : 'none')};
`;

const artistSkills = [
  {
    icon: '🧊',
    label: '3D 모델링',
    skills: [
      { emoji: '🫐', name: 'Blender',           level: 4 },
      { emoji: '🪨', name: 'ZBrush',            level: 3 },
      { emoji: '🎬', name: 'Maya',              level: 3 },
    ],
  },
  {
    icon: '🎨',
    label: '텍스처 / 렌더링',
    skills: [
      { emoji: '🖌️', name: 'Substance Painter', level: 4 },
      { emoji: '🖼️', name: 'Photoshop',         level: 4 },
      { emoji: '✏️', name: 'Illustrator',       level: 3 },
    ],
  },
  {
    icon: '🕹️',
    label: '게임 엔진',
    skills: [
      { emoji: '🎮', name: 'Unity',             level: 3 },
      { emoji: '⚡', name: 'Unreal Engine',     level: 2 },
    ],
  },
  {
    icon: '🛠️',
    label: '디자인 도구',
    skills: [
      { emoji: '🎯', name: 'Figma',             level: 3 },
    ],
  },
];

/* ── 카드 공통 ── */
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
const CardName = styled.h3`color: #fff; font-size: 1rem; font-weight: 700; margin-bottom: .4rem;`;
const CardDesc = styled.p`color: ${MUTED}; font-size: .83rem; line-height: 1.6; margin-bottom: 1rem;`;
const TagRow   = styled.div`display: flex; flex-wrap: wrap; gap: .4rem;`;

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

/* ── Contact ── */
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

/* ── Bottom Buttons ── */
const BottomSec = styled.div`
  padding: 3rem 10% 5rem;
  background: ${BG};
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  border-top: 1px solid ${BORD};
`;

const GoldBtn = styled.button`
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
`;

const BlueBtn = styled.button`
  display: flex; align-items: center; gap: .7rem;
  padding: .9rem 2.4rem;
  background: transparent;
  border: 1px solid ${B}55;
  border-radius: 8px;
  color: ${B};
  font-size: .95rem;
  font-weight: 600;
  letter-spacing: .06em;
  cursor: pointer;
  transition: background .2s, transform .2s;
  &:hover { background: rgba(74,158,255,.1); transform: translateY(-2px); }
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

/* ────────────────────────────────
   COMPONENT
──────────────────────────────── */
function ArtistPage({ onBackToDev }) {
  const phaseRef = useRef('landing');
  const [phase, setPhaseState] = useState('landing');

  const setPhase = (p) => { phaseRef.current = p; setPhaseState(p); };

  /* 랜딩 클릭 → exiting → portfolio */
  const handleLandingClick = () => {
    if (phaseRef.current !== 'landing') return;
    setPhase('exiting');
    setTimeout(() => setPhase('portfolio'), 1000);
  };

  /* Dev 버튼 클릭 — 랜딩 클릭 이벤트 차단 */
  const handleDevBtn = (e) => {
    e.stopPropagation();
    onBackToDev?.();
  };

  /* "Back to Landing" — 랜딩으로 복귀 */
  const handleBackToLanding = () => {
    setPhase('landing');
    window.scrollTo({ top: 0 });
  };

  const isLanding  = phase === 'landing' || phase === 'exiting';
  const isPortfolio = phase === 'portfolio';

  return (
    <>
      {/* ── LANDING ── */}
      {isLanding && (
        <LandingSection $exiting={phase === 'exiting'} onClick={handleLandingClick}>
          {/* 배경 Orb */}
          <LandingOrb style={{
            width: '500px', height: '500px',
            background: `radial-gradient(circle,${G}10 0%,transparent 65%)`,
            top: '-150px', right: '-100px',
          }} />
          <LandingOrb style={{
            width: '300px', height: '300px',
            background: `radial-gradient(circle,${P}18 0%,transparent 65%)`,
            bottom: '50px', left: '-80px',
            animationDelay: '2.5s',
          }} />

          {/* 좌측 Developer 버튼 */}
          <DevBtn onClick={handleDevBtn} title="Developer Portfolio">
            <DevBtnIcon>⟨</DevBtnIcon>
            <DevBtnLabel>Developer</DevBtnLabel>
            <DevBtnArrow>‹</DevBtnArrow>
          </DevBtn>

          {/* 우측 텍스트 */}
          <LandingContent $exiting={phase === 'exiting'}>
            <LandingTag>✦ 3D Artist Portfolio</LandingTag>
            <LandingName>
              Han<NameSep>·</NameSep>Kyeol
            </LandingName>
            <LandingSub>3D Artist / Game Graphic Designer</LandingSub>
            <LandingDesc>
              게임 그래픽과 3D 아트를 전공하며 모델링·텍스처·조명까지
              폭넓은 경험을 쌓았습니다. 게임잼 참가, 게임개발 기능경기대회 출전,
              디지털 아트 동아리 활동을 통해 창의적인 비주얼을 만들어왔습니다.
            </LandingDesc>
          </LandingContent>

          <ClickHint>— CLICK ANYWHERE TO ENTER —</ClickHint>
        </LandingSection>
      )}

      {/* ── PORTFOLIO ── */}
      {isPortfolio && (
        <PageWrap>
          {/* Navbar */}
          <ArtistNav>
            <NavLogo>kyeol.art</NavLogo>
            <NavLinks>
              <li><NavLink href="#a-about">About</NavLink></li>
              <li><NavLink href="#a-skills">Skills</NavLink></li>
              <li><NavLink href="#a-personal">Works</NavLink></li>
              <li><NavLink href="#a-projects">Projects</NavLink></li>
              <li><NavLink href="#a-contact">Contact</NavLink></li>
            </NavLinks>
          </ArtistNav>

          {/* About */}
          <div style={{ paddingTop: '60px' }}>
            <ArtistAbout />
          </div>

          {/* Skills */}
          <SecWrap id="a-skills" $alt>
            <Reveal>
              <SecTitle><span>#</span> Skills</SecTitle>
              <SecDivider />
            </Reveal>
            <SkillGrid>
              {artistSkills.map((cat, i) => (
                <Reveal key={cat.label} delay={i * 0.08}>
                  <SkillCard>
                    <SkillCardHeader>
                      <SkillCardIcon>{cat.icon}</SkillCardIcon>
                      <SkillCardLabel>{cat.label}</SkillCardLabel>
                    </SkillCardHeader>
                    <SkillList>
                      {cat.skills.map((skill) => (
                        <SkillRow key={skill.name}>
                          <SkillLeft>
                            <SkillEmoji>{skill.emoji}</SkillEmoji>
                            <SkillName>{skill.name}</SkillName>
                          </SkillLeft>
                          <Dots>
                            {[1,2,3,4,5].map((n) => (
                              <Dot key={n} $f={n <= skill.level} />
                            ))}
                          </Dots>
                        </SkillRow>
                      ))}
                    </SkillList>
                  </SkillCard>
                </Reveal>
              ))}
            </SkillGrid>
          </SecWrap>

          {/* 개인 작업 */}
          <SecWrap id="a-personal">
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
                      {w.link && <IconLink href={w.link} target="_blank">GitHub ↗</IconLink>}
                      <CardName>{w.name}</CardName>
                      <CardDesc>{w.desc}</CardDesc>
                      <TagRow>{w.tags.map(t => <CTag key={t}>{t}</CTag>)}</TagRow>
                    </CardBody>
                  </Card>
                </Reveal>
              ))}
            </CardGrid>
          </SecWrap>

          {/* 프로젝트 */}
          <SecWrap id="a-projects" $alt>
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
                      {w.link && <IconLink href={w.link} target="_blank">GitHub ↗</IconLink>}
                      <CardName>{w.name}</CardName>
                      <CardDesc>{w.desc}</CardDesc>
                      <TagRow>{w.tags.map(t => <CTag key={t}>{t}</CTag>)}</TagRow>
                    </CardBody>
                  </Card>
                </Reveal>
              ))}
            </CardGrid>
          </SecWrap>

          {/* Contact */}
          <SecWrap id="a-contact">
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

          {/* Bottom Buttons */}
          <BottomSec>
            <GoldBtn onClick={handleBackToLanding}>
              ↑ 첫 화면으로 돌아가기
            </GoldBtn>
          </BottomSec>
        </PageWrap>
      )}
    </>
  );
}

export default ArtistPage;