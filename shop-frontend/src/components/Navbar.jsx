import {AccountCircle, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile, tablet } from '../responsive';
import GlobalStyle from '../globalstyle';
import MobileNavbar from './MobileNavbar';
import { clearSessionData, logout } from '../redux/userRedux';
import { resetCart } from '../redux/cartRedux';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--bg-color);
    z-index: 4;
    ${mobile({ 
        position: "fixed", 
        bottom: 0,
        width: "100%", 
        height: "50px",
        backgroundColor: "var(--primary-color)",
    })}

`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ 
        padding: "10px 0px", 
    })}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;   
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ 
        textAlign: "center",
        border: "none",
    })}
`;

const Input = styled.input`
    border: none;

    ${mobile({ 
        width: "80vw",        
    })}
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ display: "none" })}
    ${tablet({ fontSize: "3dvw" })}
`;

const Center = styled.div`
    text-align: center;
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ display: "none" })}
    /* ${tablet({ display: "none" })} */
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    const dispatch = useDispatch();
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(resetCart());
        clearSessionData(); 
    }

    return (
        <Container id="NavBar">
            <GlobalStyle/>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder={"Search..."}/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={{color:"black", textDecoration: "none"}}>
                        <Logo>K-pop Music Shop</Logo>
                    </Link>
                </Center>
                <Right>
                {!user 
                    ? (
                    <>
                    <Link to="/register" style={{ color: "black", textDecoration: "none" }}>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
                        <MenuItem>LOG IN</MenuItem>
                    </Link>
                    </>
                    ) 
                    : (
                    <>
                        <Link to={`/profile/${user._id}`} style={{ color: "black", textDecoration: "none" }}>
                            <AccountCircle />
                        </Link>
                        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                            <MenuItem onClick={handleLogout}>LOG OUT</MenuItem>
                        </Link>
                    </>
                    )}                    
                    <Link to="/cart" style={{color:"black"}}>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
                <MobileNavbar/>
            </Wrapper>
        </Container>
    );
};

export default Navbar;