import styled from "styled-components";

const NavContainer = styled.nav`
  height: 50px;
  background-color: #dad;
`;

const Header = () => (
  <NavContainer>
    <h1> Hello World </h1>
  </NavContainer>
);

export default Header;
