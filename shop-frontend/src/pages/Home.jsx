import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'
import { mobile } from '../responsive'
import AllProductsButton from '../components/AllProductsButton'

const Title = styled.h1`
    font-weight: 700;
    flex-grow: 1;
    flex-basis: 100%;
    text-align: center;
    padding-bottom: 20px;
    ${mobile({ 
      padding: "10px 0px",
    })}
`;

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider />
        <Categories />
        <Title>Featured Products</Title>
        <Products isHomePage={true}/>
        <AllProductsButton/>
        <Newsletter />    
        <Footer/>
    </div>
  )
}

export default Home