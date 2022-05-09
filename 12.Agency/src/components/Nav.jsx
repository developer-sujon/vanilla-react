import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const LogoLink = styled.a`
  font-weight: bold;
  text-decoration: underline crimson;
  color: #000;
`;
const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  list-style: none;
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  padding: 10px 15px;
  color: #fff;
  background-color: crimson;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
`;

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <LogoLink href="/">Agency</LogoLink>
          </Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Apply Now</Button>
      </Wrapper>
    </Container>
  );
};

export default Nav;
