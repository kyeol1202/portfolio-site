import { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Reveal from '../components/Reveal.jsx';

/* ── 팔레트 ── */
const C = {
  bg:      '#08060e',
  surface: '#100c1c',
  card:    '#140f22',
  border:  '#1e1630',
  primary: '#e8a045',   // 금/앰버
  purple:  '#9b5de5',   // 퍼플
  text:    '#f0e8d8',
  muted:   '#9988aa',
};

/* ── 키프레임 ── */
const flicker = keyframes`
  0%,100%{ opacity:1; text-shadow:0 0 20px ${C.primary},0 0 40px ${C.primary}; }
  50%    { opacity:.85; text-shadow:0 0 6px ${C.primary}; }
`;
const scanV = keyframes`
  0%  { top:0;   opacity:.8; }
  100%{ top:100%; opacity:0; }
`;
const gridPan = keyframes`
  0%  { background-position:0 0; }
  100%{ background-position:80px 80px; }
`;
const fadeUp = keyframes`
  from{ opacity:0; transform:translateY(28px); }
  to  { opacity:1; transform:translateY(0); }
`;
const orbPulse = keyframes`
  0%,100%{ transform:scale(1);   opacity:.55; }
  50%    { transform:scale(1.12); opacity:.8; }
`;
const backGlow = keyframes`
  0%,100%{ box-shadow:0 0 10px ${C.primary}44; }
  50%    { box-shadow:0 0 28px ${C.primary}99; }
`;

/* ── Wrapper ── */
const PageWrap = styled.div`
  background: ${C.bg};
  min-height: 100vh;
  color: ${C.text};
`;

/* ── HERO ── */
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  overflow: hidden;

  &::before {
    content:'';
    position:absolute; inset:0;
    background-image:
      linear-gradient(rgba(232,160,69,.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,160,69,.035) 1px, transparent 1px);
    background-size:80px 80px;
    animation:${gridPan} 8s linear infinite;
    pointer-events:none;
  }
`;

const Orb = styled.div`
  position:absolute;
  border-radius:50%;
  pointer-events:none;
  animation:${orbPulse} 4s ease infinite;
`;

const HeroScan = styled.div`
  position:absolute;
  left:0; width:100%; height:2px;
  background:linear-gradient(90deg,transparent,${C.primary},transparent);
  animation:${scanV} 1.2s ease-out .3s both;
  pointer-events:none; z-index:2;
`;

const Tag = styled.span`
  display:inline-block;
  font-size:.7rem; font-weight:700;
  letter-spacing:.2em; text-transform:uppercase;
  color:${C.primary}; border:1px solid ${C.primary}44;
  padding:.3rem .9rem; border-radius:20px;
  margin-bottom:1.4rem;
  opacity:0;
  animation:${fadeUp} .5s ease .4s both;
`;

const HeroName = styled.h1`
  font-size:clamp(2.8rem,7vw,6rem);
  font-weight:900;
  letter-spacing:-.02em;
  color:#fff;
  line-height:1.05;
  animation:${flicker} 3s ease 2s 2, ${fadeUp} .6s ease .5s both;
  opacity:0;
  animation-fill-mode:both;
`;

const HeroSub = styled.p`
  font-size:clamp(1rem,2vw,1.5rem);
  color:${C.purple};
  font-weight:400;
  margin-top:.8rem;
  letter-spacing:.06em;
  opacity:0;
  animation:${fadeUp} .5s ease .7s both;
  &::before{ content:'// '; opacity:.5; }
`;

const HeroDesc = styled.p`
  max-width:520px;
  color:${C.muted};
  line-height:1.9;
  margin-top:1.6rem;
  font-size:.95rem;
  opacity:0;
  animation:${fadeUp} .5s ease .9s both;
`;

/* ── 섹션 공통 ── */
const Section = styled.section`
  padding:6rem 10%;
  background:${({ $alt }) => $alt ? C.surface : C.bg};
`;

const SectionTitle = styled.h2`
  font-size:2rem; font-weight:700;
  color:#fff; margin-bottom:.5rem;
  span{ color:${C.primary}; }
`;

const Divider = styled.div`
  width:50px; height:3px;
  background:linear-gradient(90deg,${C.primary},${C.purple});
  margin-bottom:3rem; border-radius:2px;
`;

/* ── WORKS ── */
const WorksGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(290px,1fr));
  gap:1.5rem;
`;

const WorkCard = styled.div`
  background:${C.card};
  border:1px solid ${C.border};
  border-radius:14px;
  overflow:hidden;
  transition:border-color .2s, transform .2s;
  &:hover{ border-color:${C.primary}; transform:translateY(-5px); }
`;

const WorkThumb = styled.div`
  width:100%; aspect-ratio:16/9;
  background:${({ $bg }) => $bg || `linear-gradient(135deg,#1a0f30,#2a1a00)`};
  display:flex; align-items:center; justify-content:center;
  font-size:3rem;
`;

const WorkInfo = styled.div`
  padding:1.3rem 1.5rem;
`;

const WorkName = styled.h3`
  color:#fff; font-size:1rem; font-weight:700;
  margin-bottom:.4rem;
`;

const WorkDesc = styled.p`
  color:${C.muted}; font-size:.83rem; line-height:1.6;
  margin-bottom:1rem;
`;

const TagRow = styled.div`
  display:flex; flex-wrap:wrap; gap:.4rem;
`;

const WorkTag = styled.span`
  background:rgba(232,160,69,.1);
  color:${C.primary};
  font-size:.72rem;
  padding:.2rem .6rem;
  border-radius:20px;
  border:1px solid rgba(232,160,69,.2);
`;

/* ── SKILLS ── */
const SkillGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(130px,1fr));
  gap:.9rem;
`;

const SkillCard = styled.div`
  background:${C.card};
  border:1px solid ${C.border};
  border-radius:10px;
  padding:1.2rem 1rem;
  text-align:center;
  transition:border-color .2s, transform .2s;
  &:hover{ border-color:${C.primary}; transform:translateY(-4px); }
`;

const SkillIcon = styled.div`font-size:2rem; margin-bottom:.5rem;`;
const SkillName = styled.p`color:${C.muted}; font-size:.83rem; font-weight:500;`;

/* ── CONTACT ── */
const ContactWrap = styled.div`text-align:center;`;

const ContactSub = styled.p`
  color:${C.muted}; font-size:1rem;
  line-height:1.7; margin-bottom:2.5rem;
`;

const LinkGroup = styled.div`
  display:flex; justify-content:center;
  gap:1.2rem; flex-wrap:wrap;
`;

const ContactLink = styled.a`
  display:flex; align-items:center; gap:.5rem;
  padding:.8rem 1.8rem;
  border:1px solid ${C.border};
  border-radius:8px;
  color:${C.muted};
  text-decoration:none;
  font-size:.95rem;
  transition:border-color .2s, color .2s, transform .2s;
  &:hover{ border-color:${C.primary}; color:${C.primary}; transform:translateY(-2px); }
`;

/* ── BACK BUTTON ── */
const BackSection = styled.div`
  padding:3rem 10% 5rem;
  background:${C.bg};
  display:flex;
  justify-content:center;
  border-top:1px solid ${C.border};
`;

const BackBtn = styled.button`
  display:flex; align-items:center; gap:.7rem;
  padding:.9rem 2.4rem;
  background:transparent;
  border:1px solid ${C.primary}66;
  border-radius:8px;
  color:${C.primary};
  font-size:.95rem;
  font-weight:600;
  letter-spacing:.06em;
  cursor:pointer;
  transition:background .2s, border-color .2s, transform .2s;
  animation:${backGlow} 2.5s ease infinite;
  &:hover{
    background:rgba(232,160,69,.1);
    border-color:${C.primary};
    transform:translateY(-2px);
  }
  svg{ transition:transform .2s; }
  &:hover svg{ transform:translateX(-4px); }
`;

/* ── 데이터 ── */
const works = [
  {
    name: '프로젝트 A',
    desc: '3D 모델링 및 텍스처링 작업물. 업데이트 예정.',
    icon: '🗿',
    bg: 'linear-gradient(135deg,#1a0a30,#2d1200)',
    tags: ['Blender', 'Substance Painter'],
  },
  {
    name: '프로젝트 B',
    desc: '캐릭터 디자인 및 리깅. 업데이트 예정.',
    icon: '🧊',
    bg: 'linear-gradient(135deg,#001a2a,#0a1a00)',
    tags: ['ZBrush', 'Maya'],
  },
  {
    name: '프로젝트 C',
    desc: '환경 아트 & 조명 연출. 업데이트 예정.',
    icon: '🌌',
    bg: 'linear-gradient(135deg,#0a001a,#1a0a00)',
    tags: ['Unreal Engine', 'Blender'],
  },
];

const skills3D = [
  { icon:'🟧', name:'Blender' },
  { icon:'🦴', name:'Maya' },
  { icon:'🧊', name:'ZBrush' },
  { icon:'🎨', name:'Substance' },
  { icon:'🔵', name:'Photoshop' },
  { icon:'🎮', name:'Unreal 5' },
  { icon:'🌿', name:'Unity' },
  { icon:'🖼️', name:'Figma' },
];

/* ── 컴포넌트 ── */
function ArtistPage({ onBackToDev }) {
  return (
    <PageWrap>
      {/* ─── HERO ─── */}
      <HeroSection>
        <Orb style={{
          width:'500px', height:'500px',
          background:`radial-gradient(circle,${C.primary}12 0%,transparent 65%)`,
          top:'-150px', right:'-100px',
        }} />
        <Orb style={{
          width:'300px', height:'300px',
          background:`radial-gradient(circle,${C.purple}18 0%,transparent 65%)`,
          bottom:'50px', left:'-80px',
          animationDelay:'2s',
        }} />
        <HeroScan />

        <Tag>✦ 3D Artist Portfolio</Tag>
        <HeroName>Kim<br/>Hangyeol</HeroName>
        <HeroSub>3D Artist / Game Graphic Designer</HeroSub>
        <HeroDesc>
          게임 그래픽과 3D 아트를 전공하며 모델링·텍스처·조명까지
          폭넓은 경험을 쌓았습니다. 창의적이고 몰입감 있는 비주얼을 만드는 것을 즐깁니다.
        </HeroDesc>
      </HeroSection>

      {/* ─── WORKS ─── */}
      <Section id="a-works">
        <Reveal>
          <SectionTitle><span>#</span> Works</SectionTitle>
          <Divider />
        </Reveal>
        <WorksGrid>
          {works.map((w, i) => (
            <Reveal key={w.name} delay={i * 0.12}>
              <WorkCard>
                <WorkThumb $bg={w.bg}>{w.icon}</WorkThumb>
                <WorkInfo>
                  <WorkName>{w.name}</WorkName>
                  <WorkDesc>{w.desc}</WorkDesc>
                  <TagRow>
                    {w.tags.map(t => <WorkTag key={t}>{t}</WorkTag>)}
                  </TagRow>
                </WorkInfo>
              </WorkCard>
            </Reveal>
          ))}
        </WorksGrid>
      </Section>

      {/* ─── SKILLS ─── */}
      <Section $alt>
        <Reveal>
          <SectionTitle><span>#</span> Tools & Skills</SectionTitle>
          <Divider />
        </Reveal>
        <SkillGrid>
          {skills3D.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <SkillCard>
                <SkillIcon>{s.icon}</SkillIcon>
                <SkillName>{s.name}</SkillName>
              </SkillCard>
            </Reveal>
          ))}
        </SkillGrid>
      </Section>

      {/* ─── CONTACT ─── */}
      <Section>
        <Reveal>
          <ContactWrap>
            <SectionTitle><span>#</span> Contact</SectionTitle>
            <Divider style={{ margin: '0 auto 2rem' }} />
            <ContactSub>작업 의뢰나 협업 문의는 편하게 연락해 주세요!</ContactSub>
          </ContactWrap>
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

      {/* ─── BACK BUTTON ─── */}
      <BackSection>
        <BackBtn onClick={onBackToDev}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Developer Portfolio 로 돌아가기
        </BackBtn>
      </BackSection>
    </PageWrap>
  );
}

export default ArtistPage;