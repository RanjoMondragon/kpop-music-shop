import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 80%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    background-color: var(--bg-color);

    &:hover ${Info}{
        opacity: 1;
    }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  padding: 0px 10px;
  z-index: 2;
`;

const Image = styled.img`
    height: 250px;
    width: 100%;
    z-index: 2;
    object-fit: cover;

`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transform: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const ProductTitleText = styled.p`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0px;
`;

const Product = ({item}) => {
    return (
        <Container>
            <ImageContainer>
                <Link to={`/product/${item._id}`}>
                    <Image src={item.img} />
                </Link>  
            </ImageContainer>          
                <Info>
                    <Icon>
                        <Link to={`/product/${item._id}`}>
                        <SearchOutlined style={{color:"black"}}/>
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined style={{color:"black"}}/>
                    </Icon>
                </Info>
            
            <ProductTitleText>{item.title}</ProductTitleText>            
        </Container>
    )
}

export default Product