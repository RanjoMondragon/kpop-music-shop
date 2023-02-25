import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 60vh;
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
    ${mobile({ height: "20dvh" })}
`;
const Title = styled.h1`
    color: white;
    font-weight: 700;
    font-size: 40px;
    padding: 10px;
    text-align: center;
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

function CategoryItem({item}) {
  return (
    <Container>
        {/* Turn Season's Greetings to SeasonsGreetings in the URL */}
        <Link to={`/products/${decodeURI(item.category).replace(/[' ]+/g, '')}`}>
        <Image src={item.img} />
        <Overlay/>
        <Info>
            <Title>{item.category}</Title>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem