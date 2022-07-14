//import welcomeImage from '/background.jpg'
import { Button, Grid, Typography } from '@mui/material';
import styles from '../styles/Home.module.css'
import TypeAnimation from 'react-type-animation'
import {useRouter} from 'next/router'

export default function Home() {

  const router = useRouter();

  return (
    <>
      <Grid container className={styles.background} sx={{height:"100vh"}} alignItems="flex-start" direction = "column">
        <Grid item sx={{marginLeft:"12em",marginTop:"5em"}}>
          <Typography variant='h1' sx={{fontWeight:"bold"}}>
           WELCOME
          </Typography>
          <TypeAnimation 
            sequence={['Common Platform to Solve your All Queries', 1000, 'ANSWER ME']}
            wrapper="h1"
            repeat={Infinity}
          />
        </Grid>
        <Grid item sx={{marginLeft:"20em",marginTop:"10em"}}>
          <Button variant="contained" onClick={()=>router.push('/question')}>
            <Typography variant='h3' >
              Explore
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
    
  )
}
