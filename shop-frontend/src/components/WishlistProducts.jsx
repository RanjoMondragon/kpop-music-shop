import { useSelector } from "react-redux"
import styled from "styled-components"
import { mobile } from "../responsive"
import Product from "./Product"

const Container = styled.div`
    display: flex;
    padding: 0px 20px 20px 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ 
      padding: "0px 10px 10px 10px",
    })}
`

const WishlistProducts = () => {
  const wishlist = useSelector((state) => state.wishlist.products);

  return (
    <Container>
      {!(wishlist.length === 0) && wishlist.map((item) => <Product key={item._id} item={item} />)}
    </Container>
  );
}

export default WishlistProducts