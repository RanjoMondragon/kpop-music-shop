import { Link } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import PasswordStrengthBar from 'react-password-strength-bar';
import { useState } from "react";
import { Cancel, CheckCircle } from "@mui/icons-material";
import { Alert, Icon, Snackbar } from "@mui/material";
import axios from "axios";


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

const PasswordChecklist = styled.div`
    color: gray;
    padding-left: 50px;
    margin-right: auto;
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
const Error = styled.span`
    color: red;
    padding-bottom: 10px;
    text-align: center;
`

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLengthValid, setIsLengthValid] = useState(false);
    const [hasLowerCase, setHasLowerCase] = useState(false);
    const [hasUpperCase, setHasUpperCase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
      
    const isPasswordValid = (password) => {
        const lengthRegex = /.{8,}/;
        const lowerCaseRegex = /[a-z]/;
        const upperCaseRegex = /[A-Z]/;
        const numberRegex = /\d/;
        
        setIsLengthValid(lengthRegex.test(password));
        setHasLowerCase(lowerCaseRegex.test(password));
        setHasUpperCase(upperCaseRegex.test(password));
        setHasNumber(numberRegex.test(password));

        return (
            lengthRegex.test(password) &&
            lowerCaseRegex.test(password) &&
            upperCaseRegex.test(password) &&
            numberRegex.test(password)
        );
    };

    const handlePasswordComplexity = (event) => {
        setPassword(event.target.value);
        isPasswordValid(event.target.value);
    };
    
    const handleConfirmPassword = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        setIsPasswordMatch(value === password);
    };
      
    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }    
        setSuccessOpen(false);
    };
    
    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }    
        setErrorOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                username,
                email,
                password,
            });
            setSuccessOpen(true);
        } catch (err) {
            setErrorOpen(true);
        }
      };

    return (
        <div>
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="example@domain.com" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="Password" type="password" onChange={handlePasswordComplexity}/>
                    {password && <PasswordStrengthBar password={password} style={{ width: '85%', textAlign: 'center' }} />}
                    <PasswordChecklist>
                        Password must contain: 
                        {
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Icon style={{ color: isLengthValid ? 'green' : 'red', marginRight: '5px' }}>
                                    {isLengthValid ? <CheckCircle /> : <Cancel />}
                                </Icon>
                                <span>At least 8 characters</span>
                            </div>
                        }
                        {
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Icon style={{ color: hasLowerCase ? 'green' : 'red', marginRight: '5px' }}>
                                    {hasLowerCase ? <CheckCircle /> : <Cancel />}
                                </Icon>
                                <span>A lower case letter</span>
                            </div>
                        }
                        { 
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Icon style={{ color: hasUpperCase ? 'green' : 'red', marginRight: '5px' }}>
                                    {hasUpperCase ? <CheckCircle /> : <Cancel />}
                                </Icon>
                                <span>An upper case letter</span>
                            </div>
                        }
                        {
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <Icon style={{ color: hasNumber ? 'green' : 'red', marginRight: '5px' }}>
                                    {hasNumber ? <CheckCircle /> : <Cancel />}
                                </Icon>
                                <span>A number</span>
                            </div>
                        }                   
                    </PasswordChecklist>
                    <Input placeholder="Please confirm password" type="password" onChange={handleConfirmPassword}/>
                    {password !== confirmPassword && confirmPassword !== "" && (<Error>Passwords do not match</Error>)}
                    <Button type="submit" disabled={!isPasswordMatch}>CREATE</Button>
                    <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleSuccessClose}>
                        <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }} variant="filled">
                            Your account was created successfully!
                        </Alert>
                    </Snackbar>
                    <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleErrorClose}>
                        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }} variant="filled">
                            Error creating account.
                        </Alert>
                    </Snackbar>
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