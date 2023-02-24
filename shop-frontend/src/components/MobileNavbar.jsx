import React, { useState } from 'react'
import { Home, Menu, Person, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  display: none;
  
  ${mobile({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50px",
    backgroundColor: "var(--primary-color)",
    boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
  })}
`;

const MobileNavbarItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  &.active {
    background-color: blue;
    color: white;
  }

  ${mobile({
    fontSize: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: props => props.active ? "white" : "black",
  })}
`;

const PopUpContainer = styled.div`
  position: fixed;
  bottom: 50px;
  width: 100vw;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideUp 0.3s ease-in-out forwards;

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;


const MobileNavbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation();
    const activeTab = location.pathname;    

    const handlePersonIconClick = () => {
        setShowPopup(!showPopup);
    };

    return (
        <Container>
            <Link to="/" style={{color:"black", textDecoration: "none"}}>
                <MobileNavbarItem
                    active={activeTab === '/'}
                >
                    <Home/>
                </MobileNavbarItem>
            </Link>
            <Link to="/login" style={{color:"black"}}>
                <MobileNavbarItem
                    active={activeTab === '/login'}
                >
                    <Person/>
                </MobileNavbarItem>
            </Link>
            <Link to="/cart" style={{color:"black"}}>
                <MobileNavbarItem
                    active={activeTab === '/cart'}
                >
                    <ShoppingCartOutlined/>
                </MobileNavbarItem>
            </Link>
            <MobileNavbarItem onClick={handlePersonIconClick}>
                <Menu/>
            </MobileNavbarItem>
            {showPopup && (
            <PopUpContainer>
                <div>Log in or Register</div>
            </PopUpContainer>
            )}
        </Container>
    )
}

export default MobileNavbar