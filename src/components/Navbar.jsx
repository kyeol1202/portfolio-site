import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid #1a1a2e;
`;

const Logo = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #4a9eff;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;

  &:hover {
    color: #4a9eff;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>kyeol.dev</Logo>
      <NavLinks>
        <li><NavLink href="#about">About</NavLink></li>
        <li><NavLink href="#skills">Skills</NavLink></li>
        <li><NavLink href="#projects">Projects</NavLink></li>
        <li><NavLink href="#contact">Contact</NavLink></li>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;