import React from "react";
import styled from "styled-components";
import AnimationShapes from "./AnimationShapes";
import Me from "../assets/img/me.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Button = styled.div`
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background: darkblue;
  color: #fff;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContactPhone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;
const Man = styled.img.attrs({ src: `${Me}` })`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures is Creative age</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          maiores architecto deserunt minima eveniet corporis ratione sequi nemo
          vitae fugiat quae voluptas magnam, hic nostrum laborum possimus fugit
          doloribus atque.
        </Desc>
        <Info>
          <Button>Start a Project</Button>
          <Contact>
            <ContactPhone>(+880)1772-03036</ContactPhone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Man />
      </Right>
      <AnimationShapes />
    </Container>
  );
};

export default Intro;
