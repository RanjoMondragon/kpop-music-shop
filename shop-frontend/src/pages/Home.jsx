import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from "styled-components"
import { mobile } from '../responsive'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider />
        <Title>Categories</Title>
        <Categories />
        <Title>Featured Products</Title>
        <Products />
        <Newsletter />    
        <Footer/>
    </div>
  )
}

export default Home

const Title = styled.h1`
  text-align: center;
  padding: 20px 0px;
  font-weight: 700;
  ${mobile({ 
    ":first-of-type": {
      padding: "60px 0px 0px 0px" 
    }
  })}
`;