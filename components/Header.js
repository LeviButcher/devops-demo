import styled from "styled-components";

const Nav = ({ className, children }) => (
  <nav className={className}>{children}</nav>
);

const StyledNav = styled(Nav)`
  height: 50px;
  font-size: 1.5rem;
  text-align: center;
  color: #e61d1d;
  background-color: purple;
`;

const Header = () => (
  <StyledNav>
    <h1> The Amazing Calculator!!! </h1>
  </StyledNav>
);

export default Header;
