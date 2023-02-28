import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    padding: 20px;
    padding-top: 0px;
    text-align: right;
    ${mobile({
        padding: "10px",
        paddingTop: "0px",
    })}
    
`
const ProductsButton = styled.button`
    padding: 0 10px;
    margin-right: 3px;
    font-size: 16px;
    background-color: transparent;
    cursor: pointer;
    width: 100px;
    height: 50px;
`;

const AllProductsButton = () => {
  return (
    <Container>
        <Link to="/products" style={{color:"black", textDecoration: "none"}}>        
            <ProductsButton>See all</ProductsButton>
        </Link>
    </Container>
  )
}

export default AllProductsButton