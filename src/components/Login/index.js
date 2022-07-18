import React, { useEffect,useRef } from 'react'
import {useState} from 'react'
import { useAuth } from '../../context/AuthContext'
import { Typography,TextField,Stack,Button,Link} from '@mui/material'
import {Navigate, useNavigate} from 'react-router-dom'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const NAME_REGEX = /^[A-Za-z]+$/;

function Login() {
  const [emailError,setEmailError] = useState(false);
  const emailId = useRef();
  const password = useRef();
  const [emailErrorText,setEmailErrorText] = useState('');
  const [passwordErrorText,setPasswordErrorText] = useState('');
  const [passwordError,setPasswordError] = useState(false);
  const { login,currentUser } = useAuth();
  const navigate = useNavigate();



  function checkEmailError ()  {
    if(!emailId.current.toLowerCase().match(EMAIL_REGEX) ){
        setEmailError(true)
        setEmailErrorText("invalid mail")
    }else{
        setEmailError(false);
        setEmailErrorText("");
    }
}

  const handleEmailChange = (e) =>{
    emailId.current = e.target.value;
    checkEmailError();
}

function checkPasswordError () {
  if(!password.current.match(PWD_REGEX)){
      setPasswordError(true);
      setPasswordErrorText("minimum 8 letters,1 number,1 special character")
  }
  else{
      setPasswordError(false);
      setPasswordErrorText("")
  }
}

const handlePasswordChange = (e) =>{
  password.current = e.target.value
    checkPasswordError();
} 

const handleSubmit = async (e) => {
    e.preventDefault();
    await login(emailId.current,password.current).catch((error) => {
      alert(error);
    })
    navigate("/")




    if(!emailError && emailId.current !=="" && !passwordError && password.current !== "")
    {
      setEmailError(false);
      setPasswordError(false);
    }
    else{
        setEmailError(true);
        setPasswordError(true);
        console.log('error');
    }

    if(emailId.current === "")
        setEmailErrorText("empty field");
    else
        setEmailErrorText("");
    if(password.current === "")
        setPasswordErrorText("empty field")
    else
        setPasswordErrorText("");
}

  return (
            <form> 
                {currentUser && currentUser.email}
              <Stack spacing={2} sx={{margin:"20px"}}>
                  <Typography
                      variant="h6"
                  >
                    SIGN IN
                  </Typography>
                  <Stack direction="row" justifyContent="space-between" spacing={1}>
                  </Stack>
                  <TextField 
                    error = {emailError}
                    label="email"
                    variant = "outlined"
                    onChange = {handleEmailChange}
                    autoComplete='user'
                    helperText = {emailErrorText}
                    />
                    <Stack direction="row" justifyContent="space-between" spacing={1}>
                    <TextField 
                      error = {passwordError}
                      label="password"
                      variant = "outlined"
                      type="password"
                      onChange = {handlePasswordChange}
                      autoComplete='current-password'
                      helperText = {passwordErrorText}
                      sx={{width:"100%"}}
                      />
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" spacing={1}> 
                  <Button
                    variant ="contained"
                    onClick = {handleSubmit}
                    >
                    Next
                  </Button>
                  </Stack>

                </Stack>
              </form>

  )
}

export default Login