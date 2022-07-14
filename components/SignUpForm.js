import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/router';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {... props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date(). getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const router = useRouter()

  async function handleSubmit(event){
    event. preventDefault();
    const data = new FormData(event. currentTarget);
    const formdata = {
      email:data.get('email'),
      password:data.get('password')
    }
    
    const fetchdata = await fetch('http://localhost:3001/user/signup',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdata)
    })

    const signupdata = await fetchdata.json()
    if(signupdata.message === "Logged in Successfully"){
      router.push('/signin')
    }

  };

  return (
        <Grid
          container direction ="column"
          alignItems="center"
          sx={{
              backgroundColor:"#E8F9FD",
              borderRadius:"5%",
              width:"25em",
              boxShadow:"10"
          }}
        >
          <Typography component="h1" variant="h4" style={{marginTop:"1em",fontWeight:"bold"}}>
            Sign Up
          </Typography>
          <Grid item container direction = "column" alignItems="center" component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              style={{width:"20em",}}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              style={{width:"20em",}}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              style={{width:"20em",}}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Grid>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Grid>
  );
}