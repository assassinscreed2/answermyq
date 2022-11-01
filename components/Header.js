import React,{useState} from 'react'
import {Button,AppBar,Toolbar,Tabs,Tab,useMediaQuery,Menu,MenuItem,Box} from '@mui/material'
import {ThemeProvider, useTheme} from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Image from 'next/image';
import {useRouter} from 'next/router'
import Link from '../src/Link';
import { useUser } from '@auth0/nextjs-auth0';

const useStyles = makeStyles(theme => ({
    tabs:{
        marginLeft:"12em",
        backgroundColor:'white',
        borderColor:"transparent"
    },
    root:{
        marginLeft:"auto",
        textTransform:"none",
        "&:hover":{
            textDecoration:"none"
        }
    },
    logo:{
        marginLeft:"auto"
    },
    icon:{
        width:"40px",
        height:"50px"
    },
    menu:{
        marginTop:"0em",
        marginRight:"12%",
        backgroundColor:"#556cd6"
    },
    item:{
        color:"white"
    }
}))

export default function Header(){
    const theme = useTheme();
    const router = useRouter();
    const { user, error, isLoading } = useUser(); 
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  //dfd
    const handleClose = () => {
      setAnchorEl(null);
    };

const tabs = (
        <Tabs style={{marginLeft:"auto"}}>
          <Tab classes={{root:classes.root}} label="Home" onClick={()=>router.push('/')}/>
          <Tab  style={{textTransform:"none",textDecoration:"none"}} label="Question"  onClick={()=>router.push('/question')} />
          <Tab style={{textTransform:"none",textDecoration:"none"}} label="Ask Question"  onClick={()=>{user?router.push('/askquestion'):router.push('/api/auth/login')}}/>
          <Tab style={{textTransform:"none",textDecoration:"none"}} label="LOGIN" href="/api/auth/login" component={Link}/>
          <Tab style={{textTransform:"none",textDecoration:"none"}} label="LOGOUT" href="/api/auth/logout" component={Link}/>
        </Tabs>
        //sfsf
)

const menu = (<>
      <Button className = {classes.logo} aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <MenuRoundedIcon className={classes.icon}/>
      </Button>
      <Menu
        elevation = {0}
        classes = {{paper:classes.menu}}
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem classes={{root:classes.item}} onClick={() => {handleClose(); router.push('/')}} >Home</MenuItem>
        <MenuItem classes={{root:classes.item}} onClick={() => {handleClose(); router.push('/question')}} >Question</MenuItem>
        <MenuItem classes={{root:classes.item}} onClick={() => {handleClose(); router.push('/askquestion')}} >Ask Question</MenuItem>
        <MenuItem onClick={handleClose} href="/api/auth/login" component={Link} classes={{root:classes.item}} >Login</MenuItem>
        <MenuItem onClick={handleClose} href="/api/auth/logout" component={Link} classes={{root:classes.item}} >Logout</MenuItem>
      </Menu>
    </>
)

    return <>
    <AppBar position="static" sx={{bgcolor:"#BDF2D5"}}>
    {/* fd */}
        <Toolbar>
            <Button>click me</Button>
            <Box sx={{padding:"3px"}}>
                <Image src="/logo.png" width={70} height={55}/>
            </Box>
            {matchesSM?menu:tabs}
        </Toolbar>
    </AppBar>
    </>
}