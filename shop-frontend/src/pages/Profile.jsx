import { Cancel, CheckCircle } from '@mui/icons-material'
import { Alert, Icon, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import PasswordStrengthBar from 'react-password-strength-bar'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import axios from "axios";
import { useSelector } from 'react-redux'

const Container = styled.div`
    height: 95dvh;
    padding: 20px;
    padding-top: 60px;
    padding-bottom: -60px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-color);
    ${mobile({
        padding: "10px",
        paddingTop: "0px",
    })}    
`
const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    background-color: var(--off-white);
    border: 1px solid;
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
const FormText = styled.span`
    text-align: left;
    margin-right: auto;
`

const Input = styled.input`
    flex: 1;
    width: 100%;
    margin: 10px;
    padding: 10px;
`

const PasswordChecklist = styled.div`
    color: black;
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

function Profile() {
    const currentUser = useSelector(state => state.user.currentUser);
    const [username, setUsername] = useState(currentUser.username);
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLengthValid, setIsLengthValid] = useState(false);
    const [hasLowerCase, setHasLowerCase] = useState(false);
    const [hasUpperCase, setHasUpperCase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const { userId } = useParams();
    const userToken = localStorage.getItem('userToken');
    const [isFormDirty, setIsFormDirty] = useState(false);
    const [isEmailDirty, setIsEmailDirty] = useState(false);
    const [isUsernameDirty, setIsUsernameDirty] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsEmailDirty(true);
      };
      
      const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setIsUsernameDirty(true);
      };

      
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
          const data = {};
          if (isEmailDirty) {
            data.email = email;
          }
          if (isUsernameDirty) {
            data.username = username;
          }
          if (password) {
            data.password = password;
          }
      
          const res = await axios.put(`http://localhost:5000/api/users/${userId}`, data, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
      
          setSuccessOpen(true);
          setIsFormDirty(false);
          console.log(res.data);
        } catch (err) {
          setErrorOpen(true);
          console.log(err);
        }
    };     

    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>User Profile</Title>
                <Form onSubmit={handleSubmit}>
                    <FormText>Change email: </FormText>
                    <Input 
                        placeholder="example@domain.com" 
                        value={email} 
                        onChange={handleEmailChange}
                    />
                    <FormText>Change Username: </FormText>
                    <Input 
                        placeholder="Username" 
                        value={username} 
                        onChange={handleUsernameChange}                            
                    />
                    <FormText>Change Password: </FormText>
                    <Input 
                        placeholder="Password" 
                        type="password" 
                        onChange={handlePasswordComplexity}                    
                    />
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
                    <FormText>Confirm Password: </FormText>
                    <Input placeholder="Please confirm password" type="password" onChange={handleConfirmPassword}/>
                    {password !== confirmPassword && confirmPassword !== "" && (<Error>Passwords do not match</Error>)}
                    <Button type="submit" disabled={!isPasswordMatch && !isFormDirty}>Update</Button>
                    <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleSuccessClose}>
                        <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }} variant="filled">
                            Your account details have been updated!
                        </Alert>
                    </Snackbar>
                    <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleErrorClose}>
                        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }} variant="filled">
                            Error updating account details.
                        </Alert>
                    </Snackbar>
                    <Redirect>
                    <Link to="/" style={{color:"gray", textDecoration: "none"}}>Return to Shop
                    </Link>
                    </Redirect> 
                </Form>                
            </Wrapper>
        </Container>
    )
}

export default Profile