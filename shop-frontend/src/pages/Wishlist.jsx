import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import WishlistProducts from "../components/WishlistProducts"
import { mobile } from "../responsive"

const Container = styled.div`
  padding-top: 60px;
  ${mobile({ padding: "50px 0px" })}
`

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
  color: ${props=>props.type === "filled" && "white"};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Bottom = styled.div`
  /* display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })} */
`;

const BottomText = styled.div`
  text-align: center;
  padding: 20px 0px;
  font-size: 36px;
  ${mobile({ display: "none" })}
`;

const WishlistText = styled.div`
  text-align: center;
  font-size: 28px;
  font-style: italic;
`

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.products);
  console.log(wishlist.length)

  return (
    <Container>
        <Navbar/>
        <Wrapper>
          <Top>
            <Link to="/" style={{color:"black", textDecoration: "none"}}>
              <TopButton>Return to Shop</TopButton>
            </Link>
          </Top>          
          <Hr/>
          <Bottom>
            <BottomText>Your Wishlist</BottomText>
            {wishlist.length === 0 && <WishlistText>Your wishlist is empty.</WishlistText>}
            <WishlistProducts/>
          </Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Wishlist