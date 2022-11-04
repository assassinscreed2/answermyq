
import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import styles from '../styles/Home.module.css'
import TypeAnimation from 'react-type-animation'
import {useRouter} from 'next/router'

export default function Home() {
  const theme = useTheme()
  const router = useRouter();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
      <Grid container className={styles.background} sx={{height:"100vh"}} alignItems={matchesSM?"center":"flex-start"} direction = "column">
        <Grid item sx={{marginLeft:matchesSM?"0em":"12em",marginTop:"5em",width:matchesSM?"100%":undefined}}>
          <Typography variant={matchesSM?"h2":"h1"} align={matchesSM?"center":undefined} sx={{fontWeight:"bold"}}>
            WELCOME
          </Typography>
          <TypeAnimation
            sequence={['Common Platform to Solve your All Queries', 1000, 'ANSWER ME']}
            wrapper={matchesSM?"h3":"h1"}
            repeat={Infinity}
          />
        </Grid>
        <Grid item sx={{marginLeft:matchesSM?"0":"20em",marginTop:"10em"}}>
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
