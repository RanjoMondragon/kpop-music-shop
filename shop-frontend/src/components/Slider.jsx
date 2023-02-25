import { useState } from "react";
import styled from "styled-components"
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Arrow = ({ direction }) => (
    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ transform: `rotate(${direction === "left" ? 90 : -90}deg)` }}>
      <path
        fill="var(--bg-color)"
        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
      />
    </svg>
  );

const ArrowContainer = styled.div`
    width: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "0px"};
    right: ${props=> props.direction === "right" && "0px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
`;

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    position: relative;
    overflow: hidden;
    padding-top: 60px;
    &:hover ${ArrowContainer}{
        opacity: 1;
    }
    ${mobile({ display: "none" })}

`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    align-items: center;
    background-color: var(--secondary-color);
`;

const ImgContainer = styled.div`
    height: 90%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;
    padding: 50px;
    margin: auto;
    margin-left: 70px;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Feature = styled.h1`
    font-size: 40px;
    padding-bottom: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    margin-right: 60px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
  return (
    <Container>
        <ArrowContainer direction="left" onClick={()=>handleClick("left")}>
            <Arrow direction="left" />
        </ArrowContainer>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
                <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Feature>Featured Artist: </Feature>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW!</Button>
            </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <ArrowContainer direction="right" onClick={()=>handleClick("right")}>
            <Arrow direction="right" />
        </ArrowContainer>
    </Container>
  )
}

export default Slider