import { Send } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 25vh;
    background-color: var(--off-white);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ 
        paddingBottom: "50px",
    })}
`

const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "24px", marginBottom: "10px" })}
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ fontSize: "20px", textAlign: "center", marginBottom: "10px" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: var(--bg-color);
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Sign up for our Newsletter!</Title>
        <Desc>Be the first to receive news on preorders!</Desc>
        <InputContainer>
            <Input placeholder="example@domain.com"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter