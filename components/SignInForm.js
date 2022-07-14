import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const theme = createTheme();

export default function SignIn() {
  const router = useRouter()

  async function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event. currentTarget);
    const formdata = {
      email:data.get('email'),
      password:data.get('password')
    }
    const postdata = await fetch('http://localhost:3001/user/login',{
      method:'POST',
      credentials: "include",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdata)
    })
    const res = await postdata.json()
    console.log("res",res)
    if(res.error){
      router.push('/signup')
    }else if(res.message === "Incorrect Password"){
      console.log("Incorrect Password")
    }else{
      //router.push("/question")
    }
    
  };

  return (
        <Grid
          container direction ="column"
          alignItems="center"
          style={{
              backgroundColor:"#E8F9FD",
              borderRadius:"5%",
              width:"25em"
          }}
        >
          <Typography component="h1" variant="h4" style={{marginTop:"1em",fontWeight:"bold"}}>
            Sign in
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              style={{width:"20em",}}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container style={{width:"22em",marginTop:"2em"}} justifyContent="center">
              <Grid item>
                <Link href="/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        <Copyright style={{marginTop:"2em",marginBottom:"2em"}} />
        </Grid>
  );
}