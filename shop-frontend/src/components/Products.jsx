import axios from "axios"
import { useEffect, useState } from "react"
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

const Products = ({category, sort, isHomePage}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let url = "http://localhost:5000/api/products";
        if (category) {
          url += `?category=${category}`;
        }
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    
    getProducts();
  }, [category]);

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
      )) : products.slice(0, isHomePage ? 8 : 16).map((item) => (
      <Product item={item} key={item._id} />
      ))}    
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