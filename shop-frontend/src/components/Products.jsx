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

const Products = ({category, sort, isHomePage, searchQuery}) => {
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
    let filtered = [...products];
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sort === "newest") {
      filtered = filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sort === "asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filtered);
    console.log(filtered)
  }, [sort, searchQuery, products]);
  
  const productsToRender = searchQuery ? filteredProducts : products;


  return (
    <Container>
      {category
        ? productsToRender.map((item) => (
            <Product item={item} key={item._id} />
          ))
        : productsToRender.slice(0, isHomePage ? 8 : 16).map((item) => (
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