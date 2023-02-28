import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div`
    padding-top: 60px;
    ${mobile({ paddingTop: "50px" })}
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "48%", display:"flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const Redirect = styled.button`
    padding: 0 10px;
    margin-right: 20px;
    font-size: 16px;
    background-color: transparent;
    cursor: pointer;
    width: 100px;
    height: 40px;
    ${mobile({ 
        display:"none"
    })}
`;

const AllProducts = () => {
    const [sort, setSort] = useState("newest");

    return (
        <Container>
            <Navbar/>
            <Title>All Products</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="desc">Price: High to Low</Option>
                        <Option value="asc">Price: Low to High</Option>
                        <Option value="A-Z">Alphabetical: A-Z</Option>
                        <Option value="Z-A">Alphabetical: Z-A</Option>
                    </Select>
                </Filter>
                <Link to="/" style={{color:"black", textDecoration: "none"}}>
                    <Redirect>Home</Redirect>
                </Link>
            </FilterContainer>
            <Products category="" sort={sort} isHomePage={false}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
};

export default AllProducts