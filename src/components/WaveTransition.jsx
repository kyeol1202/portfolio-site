import { useEffect, useMemo } from 'react';
import styled, { keyframes, css } from 'styled-components';

const COLS = 28;
const ROWS = 16;
const TILE_DUR = 0.45;   // 타일 한 개 애니메이션 시간(s)
const SPEED   = 0.026;   // 거리 1단위당 지연(s)

/* 타일 Glow 애니메이션 — toArtist 여부로 색상 다름 */
const tileFlash = (from, mid, to) => keyframes`
  0%   { opacity: 0; transform: scale(0.6); background: ${from}; }
  35%  { opacity: 1; transform: scale(1);   background: ${mid};  box-shadow: 0 0 18px ${mid}; }
  70%  { opacity: 0.6; background: ${to}; }
  100% { opacity: 0; transform: scale(1.1); background: ${to}; }
`;

const devFlash    = tileFlash('transparent', '#4a9eff', '#e8a045');
const artistFlash = tileFlash('transparent', '#e8a045', '#4a9eff');

const Tile = styled.div`
  position: absolute;
  width: ${100 / COLS}%;
  height: ${100 / ROWS}%;
  opacity: 0;
  pointer-events: none;
  border-radius: 3px;

  ${({ $delay, $toArtist }) => css`
    animation: ${$toArtist ? devFlash : artistFlash}
      ${TILE_DUR}s ease ${$delay}s both;
  `}
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  pointer-events: none;
`;

function WaveTransition({ active, toArtist, originX = 0.85, originY = 0.5, onComplete }) {
  /* 타일 지연 계산 */
  const tiles = useMemo(() => {
    const list = [];
    const oc = originX * COLS;
    const or = originY * ROWS;
    let maxDelay = 0;

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const dist  = Math.sqrt((c - oc) ** 2 + (r - or) ** 2);
        const delay = dist * SPEED;
        if (delay > maxDelay) maxDelay = delay;
        list.push({ c, r, delay });
      }
    }
    return { list, maxDelay };
  }, [originX, originY]);

  /* 애니메이션 완료 콜백 */
  useEffect(() => {
    if (!active) return;
    const total = (tiles.maxDelay + TILE_DUR + 0.1) * 1000;
    const t = setTimeout(() => onComplete?.(), total);
    return () => clearTimeout(t);
  }, [active, tiles.maxDelay, onComplete]);

  if (!active) return null;

  return (
    <Overlay>
      {tiles.list.map(({ c, r, delay }) => (
        <Tile
          key={`${c}-${r}`}
          $delay={delay}
          $toArtist={toArtist}
          style={{
            left:  `${(c / COLS) * 100}%`,
            top:   `${(r / ROWS) * 100}%`,
          }}
        />
      ))}
    </Overlay>
  );
}

export default WaveTransition;