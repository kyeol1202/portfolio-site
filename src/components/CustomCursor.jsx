import { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const spinAnim = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

/* 색상 기반 동적 keyframe */
const makePulseRing = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return keyframes`
    0%, 100% { box-shadow: 0 0 10px rgba(${r},${g},${b},0.2), inset 0 0 10px rgba(${r},${g},${b},0.04); }
    50%       { box-shadow: 0 0 30px rgba(${r},${g},${b},0.5), inset 0 0 20px rgba(${r},${g},${b},0.08); }
  `;
};

const hexToRgba = (hex, a) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
};

const Dot = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s, transform 0.05s;
  box-shadow: ${({ $color }) => `0 0 6px ${hexToRgba($color, 0.8)}`};
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

  ${({ $isLanding, $color }) => {
    const pulse = makePulseRing($color);
    if ($isLanding)
      return css`
        width: 90px;
        height: 90px;
        border: 1px solid ${hexToRgba($color, 0.45)};
        animation: ${pulse} 2.2s ease infinite;
      `;
    return css`
      width: 36px;
      height: 36px;
      border: 1px solid ${hexToRgba($color, 0.4)};
    `;
  }}
`;

const SpinBorder = styled.div`
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  border-top-color: ${({ $color }) => $color};
  border-right-color: ${({ $color }) => hexToRgba($color, 0.3)};
  animation: ${spinAnim} 2.8s linear infinite;
`;

const Label = styled.div`
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ $color }) => $color};
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.28em;
  white-space: nowrap;
  text-shadow: ${({ $color }) => `0 0 12px ${$color}`};
  font-family: 'Segoe UI', monospace, sans-serif;
`;

export default function CustomCursor({ isLanding, color = '#4a9eff' }) {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
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
      <Dot  ref={dotRef}  $visible={visible} $color={color} />
      <Ring ref={ringRef} $visible={visible} $isLanding={isLanding} $color={color}>
        {isLanding && <SpinBorder $color={color} />}
        {isLanding && <Label $color={color}>NEXT</Label>}
      </Ring>
    </>
  );
}