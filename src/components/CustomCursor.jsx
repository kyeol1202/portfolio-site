import { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const spinAnim = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const pulseRing = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(74,158,255,0.2), inset 0 0 10px rgba(74,158,255,0.04); }
  50%       { box-shadow: 0 0 30px rgba(74,158,255,0.5), inset 0 0 20px rgba(74,158,255,0.08); }
`;

const Dot = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #4a9eff;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s, transform 0.05s;
  box-shadow: 0 0 6px rgba(74,158,255,0.8);
`;

const Ring = styled.div`
  position: fixed;
  top: 0; left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s, width 0.3s, height 0.3s;

  ${({ $isLanding }) =>
    $isLanding
      ? css`
          width: 90px;
          height: 90px;
          border: 1px solid rgba(74,158,255,0.45);
          animation: ${pulseRing} 2.2s ease infinite;
        `
      : css`
          width: 36px;
          height: 36px;
          border: 1px solid rgba(74,158,255,0.4);
        `}
`;

/* 랜딩 전용: 바깥쪽 회전 테두리 */
const SpinBorder = styled.div`
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  border-top-color: #4a9eff;
  border-right-color: rgba(74,158,255,0.3);
  animation: ${spinAnim} 2.8s linear infinite;
`;

/* 랜딩 전용: NEXT 라벨 */
const Label = styled.div`
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%);
  color: #4a9eff;
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.28em;
  white-space: nowrap;
  text-shadow: 0 0 12px rgba(74,158,255,1);
  font-family: 'Segoe UI', monospace, sans-serif;
`;

export default function CustomCursor({ isLanding }) {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const [visible, setVisible] = useState(false);
  const mouse = useRef({ x: -300, y: -300 });
  const lag   = useRef({ x: -300, y: -300 });
  const raf   = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
      if (!visible) setVisible(true);
    };

    const tick = () => {
      const lerp = isLanding ? 0.10 : 0.14;
      lag.current.x += (mouse.current.x - lag.current.x) * lerp;
      lag.current.y += (mouse.current.y - lag.current.y) * lerp;
      if (ringRef.current) {
        ringRef.current.style.left = `${lag.current.x}px`;
        ringRef.current.style.top  = `${lag.current.y}px`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isLanding]);

  return (
    <>
      <Dot  ref={dotRef}  $visible={visible} />
      <Ring ref={ringRef} $visible={visible} $isLanding={isLanding}>
        {isLanding && <SpinBorder />}
        {isLanding && <Label>NEXT</Label>}
      </Ring>
    </>
  );
}
