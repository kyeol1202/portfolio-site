import styled, { css, keyframes } from 'styled-components';
import useScrollReveal from '../hooks/useScrollReveal';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const animations = { up: fadeUp, left: fadeLeft, right: fadeRight };

const Wrapper = styled.div`
  opacity: 0;
  ${({ $visible, $direction, $delay }) =>
    $visible &&
    css`
      animation: ${animations[$direction] || fadeUp} 0.7s ease ${$delay}s both;
      opacity: 1;
    `}
`;

function Reveal({ children, direction = 'up', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <Wrapper ref={ref} $visible={isVisible} $direction={direction} $delay={delay}>
      {children}
    </Wrapper>
  );
}

export default Reveal;