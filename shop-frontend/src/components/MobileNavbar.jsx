import { Home, Person, Search, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const MobileNavbar = () => {
    const location = useLocation();
    const activeTab = location.pathname;
    const user = useSelector((state) => state.user.currentUser);    

    return (
        <Container>
            <Link to="/" style={{color:"black", textDecoration: "none"}}>
                <MobileNavbarItem
                    active={activeTab === '/'}
                >
                    <Home/>
                </MobileNavbarItem>
            </Link>
            <Link to="/search" style={{color:"black"}}>
                <MobileNavbarItem
                    active={activeTab === '/search'}
                >
                    <Search/>
                </MobileNavbarItem>
            </Link>
            <Link to="/cart" style={{color:"black"}}>
                <MobileNavbarItem
                    active={activeTab === '/cart'}
                >
                    <ShoppingCartOutlined/>
                </MobileNavbarItem>
            </Link>
            {user ? (
                <Link to={`/profile/${user._id}`} style={{color:"black"}}>
                    <MobileNavbarItem
                        active={activeTab === '/profile/:userId'}
                    >
                        <Person/>
                    </MobileNavbarItem>
                </Link>
            ) : (
                <Link to="/login" style={{color:"black"}}>
                    <MobileNavbarItem
                        active={activeTab === '/login'}
                    >
                        <Person/>
                    </MobileNavbarItem>
                </Link>
            )}
        </Container>
    )
}

export default MobileNavbar