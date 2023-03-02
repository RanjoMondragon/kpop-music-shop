import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { login } from "../redux/apiCalls"
import { loginFailure, loginStart} from "../redux/userRedux"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100dvw;
    height: 100dvh;
    background: var(--off-white);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: var(--bg-color);
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
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    max-width: 420px;
    margin: 10px 0;
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
    &:disabled{
        color: green;
        cursor: pointer;
    }
`

const RedirectLink = styled.a`
    font-size: 12px;
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
`
const ReturnLink = styled.a`
    text-align: center;
    font-size: 12px;
    color: gray;
    margin: 5px 0px;
    cursor: pointer;
`
const Error = styled.span`
    color: red;
    text-align: center;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(loginStart());
        login(dispatch, { username, password })
          .then(() => {
            navigate('/');
          })
          .catch((error) => {
            dispatch(loginFailure());
          });
      };
      
    
    return (
        <div>
        <Navbar/>
        <Container>   
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input 
                        placeholder="username" 
                        onChange={(e) => setUsername(e.target.value)}/>
                    <Input 
                        placeholder="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}/>
                    <RedirectLink>Forgot your password?</RedirectLink>
                    <Button onClick={handleClick} disabled={isFetching}>Log In</Button>
                    {error && <Error>Incorrect username/password</Error>}
                    <ReturnLink>
                    <Link to="/register" style={{color:"gray", textDecoration: "none"}}>Sign Up
                    </Link> | 
                    <Link to="/" style={{color:"gray", textDecoration: "none"}}> Return to Shop
                    </Link>
                    </ReturnLink>
                </Form>
            </Wrapper>
        </Container>
        </div>
    )
}

export default Login