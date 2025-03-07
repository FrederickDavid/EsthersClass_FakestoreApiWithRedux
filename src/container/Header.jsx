import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <Container>
      <h1>Fred Store</h1>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
