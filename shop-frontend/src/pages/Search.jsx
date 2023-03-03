import React, { useState } from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div`
    padding-top: 60px;
    ${mobile({ PaddingTop: "50px" })}
`;

const Wrapper = styled.div`
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    width: 80dvw;
    padding: 20px;
    margin: auto;
`;

const Input = styled.input`
    width: 100%;
    height: 2rem;
    font-size: 1.25rem;
    font-weight: 400;
    padding: 5px;
    border: 3px solid var(--primary-color);
`;

function Search() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
    return (
        <Container>
            <Navbar/>
            <Wrapper>
            <Form>
                <Input 
                    placeholder="Search shop..." 
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </Form>
            </Wrapper>
            <Products category={null} sort={null} isHomePage={false} searchQuery={searchQuery} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Search