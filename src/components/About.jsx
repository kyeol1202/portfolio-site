import styled from 'styled-components';
import Reveal from './Reveal.jsx';

/* ── 공통 ── */
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

/* ── 프로필 영역 ── */
const ProfileRow = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 3.5rem;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PhotoWrap = styled.div`
  min-width: 220px;
  width: 220px;
  height: 260px;
  border-radius: 14px;
  border: 2px solid rgba(74,158,255,0.35);
  box-shadow: 0 0 40px rgba(74,158,255,0.1);
  overflow: hidden;
  position: relative;
  background: linear-gradient(145deg, #111827, #0d1520);
  flex-shrink: 0;

  /* 코너 액센트 */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 18px; height: 18px;
    border-color: #4a9eff;
    border-style: solid;
    z-index: 2;
  }
  &::before { top: -3px; left: -3px; border-width: 2px 0 0 2px; }
  &::after  { bottom: -3px; right: -3px; border-width: 0 2px 2px 0; }
`;

const ProfilePhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileInitials = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(74,158,255,0.25);
  letter-spacing: 6px;
  font-family: monospace;
`;

const ProfileRight = styled.div`
  flex: 1;
`;

const BioText = styled.p`
  color: #999;
  line-height: 1.9;
  font-size: 0.95rem;
  margin-bottom: 1.6rem;
`;

/* ── 정보 카드 그리드 ── */
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px)  { grid-template-columns: 1fr; }
`;

const InfoCard = styled.div`
  background: #111;
  border: 1px solid #1e1e2e;
  border-radius: 10px;
  padding: 0.85rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: border-color 0.2s;
  &:hover { border-color: rgba(74,158,255,0.35); }
`;

const InfoIcon = styled.div`
  width: 34px; height: 34px;
  border-radius: 8px;
  background: rgba(74,158,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  color: #4a9eff;
`;

const InfoText = styled.div``;

const InfoLabel = styled.div`
  font-size: 0.65rem;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.2rem;
`;

const InfoValue = styled.div`
  font-size: 0.82rem;
  color: #ddd;
  font-weight: 500;
  line-height: 1.4;
`;

/* ── 세부 정보 그리드 ── */
const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const SubSection = styled.div`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h3`
  font-size: 0.78rem;
  font-weight: 700;
  color: #4a9eff;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  margin-bottom: 0.9rem;
  border-bottom: 1px solid rgba(74,158,255,0.15);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 4px; height: 14px;
    background: #4a9eff;
    border-radius: 2px;
    flex-shrink: 0;
  }
`;

const ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const Item = styled.li`
  font-size: 0.85rem;
  color: #aaa;
  line-height: 1.6;
  display: flex;
  gap: 0.5rem;

  &::before {
    content: '▹';
    color: #4a9eff;
    flex-shrink: 0;
    margin-top: 1px;
  }
`;


const ActivityItem = styled.li`
  font-size: 0.85rem;
  color: #aaa;
  line-height: 1.55;
  display: flex;
  gap: 0.5rem;

  &::before {
    content: '▹';
    color: #4a9eff;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const ActivityBody = styled.div``;
const ActivityMain = styled.div`
  color: #ccc;
  em {
    font-style: normal;
    color: #4a9eff;
    margin-right: 0.3rem;
  }
`;
const ActivitySub = styled.div`
  font-size: 0.78rem;
  color: #555;
  margin-top: 0.15rem;
  padding-left: 0.1rem;
`;

/* ── infoItems 데이터 ── */
const infoItems = [
  { label: '이름',     value: '김한결 (Kim HanKyeol)' },
  { label: '생년월일', value: '2000.12.02' },
  { label: '이메일',   value: 'kyeol1202@naver.com' },
  { label: 'GitHub',   value: 'github.com/kyeol1202' },
  { label: '희망 직무', value: '풀스택 / 백엔드 / 데이터' },
  { label: '병역',     value: '육군 병장 만기전역 (2020~2022)' },
];

function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionTitle><span>#</span> About Me</SectionTitle>
        <TitleDivider />
      </Reveal>

      {/* ── 프로필 ── */}
      <Reveal delay={0.05}>
        <ProfileRow>
          <PhotoWrap>
            <ProfilePhoto
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="HanKyeol"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <ProfileInitials></ProfileInitials>
          </PhotoWrap>

          <ProfileRight>
            <BioText>
              Java · Spring Boot · Python을 주력으로 공부하고 있는 개발자 김한결입니다.
              데이터 자동화 파이프라인 구축, ERP 시스템 개발, 향수 쇼핑몰 등
              다양한 팀 프로젝트에서 팀장 역할을 맡으며 실무형 경험을 쌓았습니다.
              백엔드 중심으로 성장하면서 풀스택, 데이터 분석, RPA 자동화까지
              폭넓게 역량을 확장하고 있습니다.
            </BioText>

            <InfoGrid>
              {infoItems.map((item) => (
                <InfoCard key={item.label}>
                  <InfoText>
                    <InfoLabel>{item.label}</InfoLabel>
                    <InfoValue>{item.value}</InfoValue>
                  </InfoText>
                </InfoCard>
              ))}
            </InfoGrid>
          </ProfileRight>
        </ProfileRow>
      </Reveal>

      {/* ── 세부 정보 ── */}
      <DetailGrid>
        {/* 왼쪽 */}
        <div>
          <Reveal delay={0.1}>
            <SubSection>
              <SubTitle>학력</SubTitle>
              <ItemList>
                <Item>서강대학교 미래교육원 멀티미디어공학 — 학점 3.88/4.5 (2019~2025)</Item>
                <Item>수원공업고등학교 디지털게임과 (2016~2019)</Item>
              </ItemList>
            </SubSection>
          </Reveal>

          <Reveal delay={0.15}>
            <SubSection>
              <SubTitle>교육 / 경력</SubTitle>
              <ItemList>
                <Item>글로벌아카데미 — 차세대 AI 예측 Solution 개발 (2025.11~2026.04)</Item>
                <Item>서강대 NIA AI 학습 데이터 구축 사업 — 3D 스캔데이터 보정 (2023.07~09)</Item>
                <Item>넷마블게임아카데미 2기 (2017.06~2018.01)</Item>
              </ItemList>
            </SubSection>
          </Reveal>

          <Reveal delay={0.2}>
            <SubSection>
              <SubTitle>수상</SubTitle>
              <ItemList>
                <Item>양성평등 디자인 공모전 동상 (2017, 한국양성평등교육진흥원)</Item>
                <Item>서강대 MTEC 전국 고교생 게임 아이디어 공모전 입상 (2016)</Item>
              </ItemList>
            </SubSection>
          </Reveal>
        </div>

        {/* 오른쪽 */}
        <div>
          <Reveal delay={0.1} direction="right">
            <SubSection>
              <SubTitle>자격증</SubTitle>
              <ItemList>
                <Item>사무자동화 산업기사 (2024.06)</Item>
                <Item>게임그래픽 전문가 (2023.08)</Item>
                <Item>자동차운전면허증 1종 (2020.08)</Item>
                <Item>웹디자인 기능사 (2018.07)</Item>
                <Item>컴퓨터그래픽기능사 (2017.06)</Item>
              </ItemList>
            </SubSection>
          </Reveal>

          <Reveal delay={0.2} direction="right">
            <SubSection>
              <SubTitle>대내외 활동</SubTitle>
              <ItemList as="ul">
                <ActivityItem>
                  <ActivityBody>
                    <ActivityMain>
                      <em>2016</em>게임잼 참가
                    </ActivityMain>
                    <ActivitySub>한국콘텐츠진흥원 주최 게임 제작 행사</ActivitySub>
                  </ActivityBody>
                </ActivityItem>
                <ActivityItem>
                  <ActivityBody>
                    <ActivityMain>
                      <em>2017</em>청소년 게임잼 참가
                    </ActivityMain>
                    <ActivitySub>청소년 대상 게임 개발 챌린지</ActivitySub>
                  </ActivityBody>
                </ActivityItem>
                <ActivityItem>
                  <ActivityBody>
                    <ActivityMain>
                      <em>2017</em>게임개발 기능경기대회 참가
                    </ActivityMain>
                    <ActivitySub>수원공업고등학교 디지털게임과 대표</ActivitySub>
                  </ActivityBody>
                </ActivityItem>
                <ActivityItem>
                  <ActivityBody>
                    <ActivityMain>
                      <em>2019–2020</em>아트동아리 <strong style={{color:'#ccc'}}>Spectrum</strong>
                    </ActivityMain>
                    <ActivitySub>서강대 미래교육원 — 디지털 아트 · 그래픽 디자인</ActivitySub>
                  </ActivityBody>
                </ActivityItem>
                <ActivityItem>
                  <ActivityBody>
                    <ActivityMain>
                      <em>2022–2023</em>개발동아리 <strong style={{color:'#ccc'}}>Adiutor</strong>
                    </ActivityMain>
                    <ActivitySub>서강대 미래교육원 — 게임 개발 · 2023 부회장 역임</ActivitySub>
                  </ActivityBody>
                </ActivityItem>
              </ItemList>
            </SubSection>
          </Reveal>
        </div>
      </DetailGrid>
    </Section>
  );
}

export default About;
