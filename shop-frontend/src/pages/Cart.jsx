import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { removeProduct, updateQuantity } from "../redux/cartRedux"
import { userRequest } from "../requestMethods"
import { mobile } from "../responsive"

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
  scroll-padding-top: 60px;
  ${mobile({ padding: "50px 0px" })}
`

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
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

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex:3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 200px;
  padding: 10px;
  ${mobile({ width:"150px" })}
`;

const ProductName = styled.span``;

const ProductVersion = styled.span``;

const ProductAmountContainer = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin:"5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 400;
  ${mobile({ marginBottom: "20px", fontSize:"24px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const RemoveItem = styled.p`
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector(state=>state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleQuantity = (type, productId) => {
    const product = cart.products.find((p) => p._id === productId);
    if (product) {
      const newQuantity = type === "dec" ? product.quantity - 1 : product.quantity + 1;
      if (newQuantity >= 1) {
        dispatch(updateQuantity({ productId, type }));
      }
    }
  };

  const handleRemove = (productId) => {
      dispatch(removeProduct( {productId} ))
  }

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total*100*1.15,          
        });
        navigate("/success", {data:res.data});
      } catch {}
    };
    stripeToken && cart.total >=1 && makeRequest();
  }, [stripeToken, cart.total, navigate]);
  
  console.log(stripeToken)
  return (
    <Container>
        <Navbar/>
        <Wrapper>
          <Title>Shopping Cart</Title>
          <Top>
              <Link to="/" style={{color:"black", textDecoration: "none"}}>
              <TopButton>Return to Shop</TopButton>
              </Link>
              <TopTexts>
                <TopText>Wishlist</TopText>
              </TopTexts>
          </Top>
          <Bottom>
            <Info>
              
              {cart.products.map((product)=>(<Product>
                <ProductDetail>
                  <Image src={product.img}/>
                  <Details>
                    <ProductName>
                    <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductVersion>
                    <b>Version:</b> {product.versions}
                    </ProductVersion>
                    <RemoveItem onClick={() => handleRemove(product._id)}>Remove Item</RemoveItem>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove onClick={()=>handleQuantity("dec", product._id)}/>
                    <ProductAmount>
                    {product.quantity ? product.quantity : "n"}</ProductAmount>
                    <Add onClick={()=>handleQuantity("asc", product._id)}/>
                  </ProductAmountContainer>
                  <ProductPrice>${product.price*product.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
              ))}
              {console.log(cart.products)}
              <Hr/>
            </Info>
            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>${cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping</SummaryItemText>
                <SummaryItemPrice>${cart.total*0.15}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText type="total">Total</SummaryItemText>
                <SummaryItemPrice>${(cart.total*1.15).toFixed(2)}</SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
                name="KPOP MUSIC SHOP"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total*1.15}`}
                amount={cart.total*100*1.15}
                token={onToken}
                stripeKey={KEY}
              >
                <Button>CHECKOUT NOW</Button>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart