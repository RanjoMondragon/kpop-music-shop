import { Email, Facebook, Instagram, LocationOn, Phone, Twitter } from "@mui/icons-material"
import { Link } from 'react-router-dom';
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    ${mobile({ display: "none" })}
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
`

const Desc = styled.p`
    flex: 1;
    margin: 0px;
`

const SocialContainer = styled.div`
    display: flex;
    flex: 1;
`

const SocialIcon = styled.div`
    flex: 1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>K-pop Music Shop</Title>
            <Desc>Welcome to K-pop Music Shop, a mockup of an online shop 
            where you can purchase merchandise to support your idols.</Desc>
        
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem><Link to="/policies#PrivacyPolicy" style={{color:"black", textDecoration: "none"}}>Privacy Policy</Link></ListItem>
                <ListItem><Link to="/policies#RefundPolicy" style={{color:"black", textDecoration: "none"}}>Refund Policy</Link></ListItem>
                <ListItem><Link to="/policies#ShippingPolicy" style={{color:"black", textDecoration: "none"}}>Shipping Policy</Link></ListItem>
                <ListItem><Link to="/policies#TermsOfService" style={{color:"black", textDecoration: "none"}}>Terms of Service</Link></ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem><Email style={{marginRight:"5px"}}/>kpopmusicshop@email.com</ContactItem>
            <ContactItem><Phone style={{marginRight:"5px"}}/>+1 123-456-78890</ContactItem>
            <ContactItem><LocationOn style={{marginRight:"5px"}}/> 424 CD Path, Wild West, A1B 2C3</ContactItem>
            <Payment src=""/>
        </Right>
    </Container>
  )
}

export default Footer