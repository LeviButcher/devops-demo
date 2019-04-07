import styled from "styled-components";

const Nav = ({ className, children }) => (
  <nav className={className}>{children}</nav>
);

const StyledNav = styled(Nav)`
  height: 50px;
  text-align: center;
`;

const Header = () => (
  <StyledNav>
    <h1> The Amazing Calculator!!! </h1>
  </StyledNav>
);

export default Header;
