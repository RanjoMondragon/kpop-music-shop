import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { mobile } from "../responsive"
import Product from "./Product"

const Container = styled.div`
    display: flex;
    height: 90dvh;
    padding: 0px 20px 20px 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ 
      padding: "0px 10px 10px 10px",
    })}
`

const ProductsButtonContainer = styled.div`
    display: flex;
    flex-basis: 100%;
    height: 50px;
`;

const ProductsButton = styled.button`
    padding: 0 10px;
    margin-left: 3px;
    font-size: 16px;
    background-color: transparent;
    cursor: pointer;
    width: 150px;
    height: 50px;
`;

const Products = ({category, sort, showAllCategories}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let url = "http://localhost:5000/api/products";
        if (!showAllCategories) {
          url += `?category=${category}`;
        }
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    
    getProducts();
  }, [category, showAllCategories]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(products.slice().sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    } else if (sort === "asc") {
      setFilteredProducts(products.slice().sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setFilteredProducts(products.slice().sort((a, b) => b.price - a.price));
    }
  }, [sort, products]);

  return (
    <Container>
      {category ? filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      )) : products.slice(0, 8).map((item) => (
        <Product item={item} key={item._id} />
      ))}
      <ProductsButtonContainer>
        <ProductsButton>See all products</ProductsButton>
      </ProductsButtonContainer>
    </Container>
  );
}

export default Products

 // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await axios.get(
  //         category
  //           ? `http://localhost:5000/api/products?category=${category}`
  //           : "http://localhost:5000/api/products"
  //       );
  //       setProducts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProducts();
  // }, [category]);