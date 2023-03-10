import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { addProduct } from "../redux/cartRedux"
import { addProductToWishlist, removeProductFromWishlist } from "../redux/wishlistRedux"
import { publicRequest } from "../requestMethods"
import { mobile } from "../responsive"

const Container = styled.div`
    padding-top: 60px;
    ${mobile({ paddingTop: "50px"})}
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column"})}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
    ${mobile({ maxHeight: "40vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 400;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 400;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 400;
`;

const VersionSelect = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterOption = styled.option``;

const CartContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "20%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid var(--primary-color);
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const WishlistLink = styled.div`
    margin-top: 20px;
    text-decoration: underline;
    cursor: pointer;
`

const Album = () => {
    const location = useLocation();
    const id = decodeURI(location.pathname.split("/")[2]);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [versions, setVersions] = useState("default");
    const wishlist = useSelector((state) => state.wishlist && state.wishlist.products);
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
    if (product.versions && product.versions.length > 0) {
        setVersions(product.versions[0]);
    }
    }, [product]);


    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getProduct()
    },[id]);

    const handleQuantity = (type) => {
        if (type ==="dec") {
            quantity > 1 && setQuantity(quantity-1);
        } else {
            setQuantity(quantity+1);
        }
    };
    
    const handleClick = () => {
        dispatch(
          addProduct({
            product: { ...product, versions },
            quantity,
            price: product.price,
          })
        );
    };

    useEffect(() => {
        if (product._id && wishlist) {
          setIsInWishlist(wishlist.some((item) => item._id === product._id));
        }
      }, [product._id, wishlist]);
      
      

    const handleWishlistClick = () => {
        if (isInWishlist) {
          dispatch(removeProductFromWishlist({productId: product._id}));
        } else {
          dispatch(addProductToWishlist(product));
        }
        setIsInWishlist(!isInWishlist);
      };
         
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{`$${product.price}`}</Price>
                    <FilterContainer>
                        <Filter>
                        <FilterText>Select version: </FilterText>
                        {product.versions && product.versions.length > 0 && (
                        <VersionSelect 
                            onChange={(e) => setVersions(e.target.value)} 
                            value={versions}>
                            {product.versions.map((v) => (
                            <FilterOption key={v}>{v}</FilterOption>
                            ))}
                        </VersionSelect>
                        )}                        
                        </Filter>
                    </FilterContainer>
                    <CartContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("asc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </CartContainer>
                    <WishlistLink onClick={handleWishlistClick}>
                        {isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                    </WishlistLink>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Album