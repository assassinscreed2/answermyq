import {Button, Card, CardContent, Divider,useMediaQuery,useTheme ,Grid, Typography, List, ListItem, Dialog} from '@mui/material'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import AnswerBlock from './Answerblock'
import { useUser } from '@auth0/nextjs-auth0';
import {useRouter} from 'next/router'

export default function QuestionMainUtil({question}){
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md")) 
    const [open,setOpen] = useState(false)
    const router = useRouter()

    const handleOpen = () => {
        setOpen(!open)
    }

    return <Grid container className={styles.questionBackground} sx={{backgroundColor:"red",width:"100%",height:"100vh"}} justifyContent="center">
        <Grid item>
            <Card sx={{bgcolor:"#B8FFF9",maxWidth:matchesSM?"28em":"60em",mt:"2em",boxShadow:"21"}}>
                <CardContent sx={{pt:"0",pb:"0",boxShadow:"5"}}>
                <Typography variant='h4' sx={{pt:"5px",pb:"10px",fontFamily:"Bree Serif"}}>
                    {question.title}
                </Typography>
                </CardContent>
                <Divider />
                <Grid container direction = "column" justifyContent="space-between" >
                {/* Question */}
                    <Grid item>
                        <CardContent sx={{minHeight:"5.5em"}}>
                        <Typography fontFamily="Cairo">
                            {question.question}
                        </Typography>
                        </CardContent>
                    </Grid>
                    <Divider />
                {/* tags */}
                    <Grid container justifyContent="flex-end" sx={{pr:"1em"}}>
                        <Grid item>
                        <Typography sx={{fontSize:"0.8em",display:"inline",px:"7px",py:"4px"}}>
                            Tags:
                        </Typography>
                        </Grid>
                        {
                            question.tags.map((tag) => <Grid item sx={{pr:"0.3em"}}>
                            <Typography sx={{fontSize:"0.8em",bgcolor:"#D9D9D9",display:"inline",px:"7px",py:"4px",borderRadius:"30%"}}>
                                {tag.label}
                            </Typography>
                        </Grid>)
                        }
                    </Grid>
                </Grid>
                <Grid container direction = "row" justifyContent="center" alignContent="space-between" sx={{minHeight:"24em"}}>
                    <Grid item>
                        {
                            !open?<Button onClick={()=>{user?handleOpen():router.push('/api/auth/login')}}>
                            Answer This Question
                        </Button>:<Dialog fullWidth="true" open={open}><AnswerBlock question={question} handleOpen={handleOpen}/></Dialog>
                        }
                    </Grid>
                    <Grid item sx={{width:"90%",minWidth:matchesMD?undefined:"57em"}}>
                        <Typography>
                            Answers
                            {/* sdf */}
                        </Typography>
                        <List sx={{
                                bgcolor: '#EEEEEE',
                                position: 'relative',
                                overflow: 'scroll',
                                maxHeight: 300,
                                minHeight: "20em",
                                marginTop:"1em",
                                }}>
                                {
                                    question.answer.map((ans) => <ListItem>
                                    <Typography>
                                        {ans}
                                    </Typography>
                                </ListItem>)
                                }
                        </List>
                    </Grid>
                </Grid>
                {/* buttons */}
                <Grid container direction = "row" sx={{mt:"1em"}} justifyContent="flex-end">
                    <Grid item sx={{mr:"2em"}}>
                        <Button color="error">
                            Close
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    </Grid>
}