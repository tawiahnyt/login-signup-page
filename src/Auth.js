import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    password:''
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    
  }
  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({name:'', email:'', password:''})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={5} textAlign={"center"}>
            {isSignup ? 'Signup' : 'Login'}
          </Typography>
          {isSignup && (
            <TextField
              onChange={handleChange}
              name="name"
              value={inputs.name}
              margin="normal"
              type={"text"}
              label="Name"
              variant="outlined"
            />
          )}
          <TextField
            onChange={handleChange}
            name="email"
            value={inputs.email}
            margin="normal"
            type={"email"}
            label="Email"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            name="password"
            value={inputs.password}
            margin="normal"
            type={"password"}
            label="Password"
            variant="outlined"
          />

          <Button
            endIcon={isSignup ? <HowToRegRoundedIcon /> : <LoginRoundedIcon />}
            type="submit"
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 1 }}
          >
            {isSignup ? 'Signup' : 'Login'}
          </Button>

          <Button
            endIcon={isSignup ? <LoginRoundedIcon /> : <HowToRegRoundedIcon />}
            onClick={resetState}
            color="primary"
            sx={{ marginTop: 3, borderRadius: 1 }}
          >
            Change to {isSignup ? 'Login' : 'Signup'}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
