import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(12px);
  padding: 0.9rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s;
`;

const Logo = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
  transition: color 0.5s;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
  &:hover { color: var(--accent); }
`;

const ModeBtn = styled.button`
  background: var(--accent-08);
  border: 1px solid var(--accent-40);
  color: var(--accent);
  padding: 0.38rem 1rem;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  clip-path: polygon(7px 0%, calc(100% - 7px) 0%, 100% 50%, calc(100% - 7px) 100%, 7px 100%, 0% 50%);
  transition: background 0.2s, box-shadow 0.2s, color 0.5s, border-color 0.5s;

  &:hover {
    background: var(--accent-15);
    box-shadow: 0 0 16px var(--accent-30);
  }
`;

function Navbar({ mode, onToggleMode }) {
  return (
    <Nav>
      <Logo>kyeol.dev</Logo>
      <NavLinks>
        <li><NavLink href="#about">About</NavLink></li>
        <li><NavLink href="#skills">Skills</NavLink></li>
        <li><NavLink href="#projects">{mode === 'artist' ? 'Portfolio' : 'Projects'}</NavLink></li>
        <li><NavLink href="#contact">Contact</NavLink></li>
        <li>
          <ModeBtn onClick={onToggleMode}>
            {mode === 'artist' ? '◆ Dev Mode' : '◆ 3D Artist'}
          </ModeBtn>
        </li>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
