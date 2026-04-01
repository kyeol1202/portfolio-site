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
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 2rem; }
`;

const Text = styled.p`
  color: #aaa;
  line-height: 1.9;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InfoItem = styled.li`
  color: #ccc;
  font-size: 0.95rem;
  span { color: #4a9eff; font-weight: 600; margin-right: 0.5rem; }
`;

const SubTitle = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #1e1e2e;
`;

const CertList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CertItem = styled.li`
  color: #aaa;
  font-size: 0.9rem;
  span { color: #4a9eff; margin-right: 0.5rem; }
`;

const ActivityItem = styled.li`
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.6;
  span.bullet { color: #4a9eff; margin-right: 0.5rem; }
  span.year {
    color: #4a9eff;
    font-weight: 600;
    font-size: 0.8rem;
    margin-left: 0.4rem;
    opacity: 0.8;
  }
  em {
    display: block;
    font-style: normal;
    color: #667;
    font-size: 0.82rem;
    margin-top: 0.15rem;
    padding-left: 1.2rem;
  }
`;

function About() {
  return (
    <Section id="about">
      <Reveal>
        <Title><span>#</span> About Me</Title>
        <Divider />
      </Reveal>
      <Grid>
        {/* ── 왼쪽 컬럼 ── */}
        <div>
          <Reveal delay={0.1}>
            <Text>
              안녕하세요! Java · Spring Boot · Python을 주력으로 공부하고 있는
              개발자 김한결입니다.
            </Text>
            <Text>
              데이터 자동화 파이프라인 구축, ERP 시스템 개발, 향수 쇼핑몰 웹 서비스 등
              팀 프로젝트에서 팀장 역할을 맡으며 실무형 경험을 쌓았습니다.
            </Text>
            <Text>
              백엔드 중심으로 성장하면서 풀스택, 데이터 분석, RPA 자동화까지
              폭넓게 역량을 확장하고 있습니다.
            </Text>
          </Reveal>

          <Reveal delay={0.2}>
            <SubTitle>자격증</SubTitle>
            <CertList>
              <CertItem><span>▹</span> 사무자동화 산업기사 (2024.06)</CertItem>
              <CertItem><span>▹</span> 게임그래픽 전문가 (2023.08)</CertItem>
              <CertItem><span>▹</span> 자동차운전면허증 1종 (2020.08)</CertItem>
              <CertItem><span>▹</span> 웹디자인 기능사 (2018.07)</CertItem>
              <CertItem><span>▹</span> 컴퓨터그래픽기능사 (2017.06)</CertItem>
            </CertList>
          </Reveal>

          <Reveal delay={0.3}>
            <SubTitle>수상</SubTitle>
            <CertList>
              <CertItem><span>▹</span> 양성평등 디자인 공모전 동상 (2017, 한국양성평등교육진흥원)</CertItem>
              <CertItem><span>▹</span> 서강대 MTEC 전국 고교생 게임 아이디어 공모전 입상 (2016)</CertItem>
            </CertList>
          </Reveal>

          <Reveal delay={0.4}>
            <SubTitle>대내외 활동</SubTitle>
            <CertList as="ul">
              <ActivityItem>
                <span className="bullet">▹</span>
                게임잼 참여<span className="year">2016</span>
                <em>서강대학교 MTEC 주최 고교생 게임 제작 행사 참가</em>
              </ActivityItem>
              <ActivityItem>
                <span className="bullet">▹</span>
                청소년 게임잼 참가<span className="year">2017</span>
                <em>청소년 대상 게임 개발 아이디어톤 · 제작 챌린지</em>
              </ActivityItem>
              <ActivityItem>
                <span className="bullet">▹</span>
                게임개발 기능경기대회 참가<span className="year">2017</span>
                <em>수원공업고등학교 디지털게임과 대표 — 게임 개발 직종 기능경기 참가</em>
              </ActivityItem>
              <ActivityItem>
                <span className="bullet">▹</span>
                서강대 미래교육원 아트동아리 <strong>Spectrum</strong><span className="year">2019 – 2020</span>
                <em>디지털 아트 · 그래픽 디자인 중심 동아리 활동</em>
              </ActivityItem>
              <ActivityItem>
                <span className="bullet">▹</span>
                서강대 미래교육원 개발동아리 <strong>Adiutor</strong><span className="year">2022 – 2023</span>
                <em>웹 · 앱 개발 프로젝트 동아리 — 2023년 부회장 역임</em>
              </ActivityItem>
            </CertList>
          </Reveal>
        </div>

        {/* ── 오른쪽 컬럼 ── */}
        <div>
          <Reveal delay={0.15} direction="right">
            <InfoList>
              <InfoItem><span>▹</span> 이름: 김한결 (Kim HanKyeol)</InfoItem>
              <InfoItem><span>▹</span> 생년월일: 2000.12.02</InfoItem>
              <InfoItem><span>▹</span> 이메일: kyeol1202@naver.com</InfoItem>
              <InfoItem><span>▹</span> GitHub: github.com/kyeol1202</InfoItem>
              <InfoItem><span>▹</span> 희망 직무: 풀스택 / 백엔드 / 데이터분석</InfoItem>
              <InfoItem><span>▹</span> 병역: 육군 병장 만기전역 (2020~2022)</InfoItem>
            </InfoList>
          </Reveal>

          <Reveal delay={0.25} direction="right">
            <SubTitle>학력</SubTitle>
            <CertList>
              <CertItem><span>▹</span> 서강대학교 미래교육원 멀티미디어공학 — 학점 3.88/4.5 (2019~2025)</CertItem>
              <CertItem><span>▹</span> 수원공업고등학교 디지털게임과 (2016~2019)</CertItem>
            </CertList>
          </Reveal>

          <Reveal delay={0.35} direction="right">
            <SubTitle>교육 / 경력</SubTitle>
            <CertList>
              <CertItem><span>▹</span> 글로벌아카데미 — 차세대 AI 예측 Solution 개발 (2025.11~2026.04)</CertItem>
              <CertItem><span>▹</span> 서강대 NIA AI 학습 데이터 구축 사업 — 3D 스캔데이터 보정 (2023.07~09)</CertItem>
              <CertItem><span>▹</span> 넷마블게임아카데미 2기 (2017.06~2018.01)</CertItem>
            </CertList>
          </Reveal>
        </div>
      </Grid>
    </Section>
  );
}

export default About;
