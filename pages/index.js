import styled from "styled-components";

const Body = styled.h1`
  font-size: 16px;
  text-align: center;
  background-color: blue;
`;

function Home() {
  return <Body>Hello World</Body>;
}

export default Home;
