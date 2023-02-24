import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);
    z-index: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    z-index: 2;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    z-index: 2;
`;

function CategoryItem({item}) {
  return (
    <Container>
        {/* Turn Season's Greetings to SeasonsGreetings in the URL */}
        <Link to={`/products/${decodeURI(item.category).replace(/[' ]+/g, '')}`}>
        <Image src={item.img} />
        <Overlay/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem