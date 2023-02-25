import { Link } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100dvw;
    height: 100dvh;
    background: var(--off-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    background-color: white;
    ${mobile({ width: "75%" })}
`

const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    flex: 1;
    width: 80%;
    margin: 10px;
    padding: 10px;
`

const Button = styled.button`
    width: 100%;
    max-width: 440px;
    border: none;
    padding: 15px 20px;
    background-color: var(--primary-color);
    color: #000;
    cursor: pointer;
    margin-bottom: 10px;
    ${mobile({ width: "80%" })}
`

const Redirect = styled.a`
    text-align: center;
    font-size: 12px;
    color: gray;
    margin: 5px 0px;
    cursor: pointer;
`

const Register = () => {
  return (
    <div>
    <Navbar/>
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Button>CREATE</Button>
                <Redirect>
                <Link to="/" style={{color:"gray", textDecoration: "none"}}>Return to Shop
                </Link>
                </Redirect> 
            </Form>
            
        </Wrapper>
    </Container>
    </div>
  )
}

export default Register