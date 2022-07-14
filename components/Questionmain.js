import {Box, Button, Card, CardContent, Divider, Grid, Typography, List, ListItem, TextField, Dialog} from '@mui/material'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import AnswerBlock from './Answerblock'
import { useUser } from '@auth0/nextjs-auth0';
import {useRouter} from 'next/router'

export default function QuestionMainUtil({question}){
    const { user, error, isLoading } = useUser(); 
    //ankur
    const text = " simply simply setting industry. Lorem Ipsum has been th is simply simply setting industry. Lorem Ipsum has been th is simply simply setting industry. Lorem Ipsum has been th is simply setting industry. Lorem Ipsum has been th is simply  Lorem Ipsum simply setting industry. Lorem Ipsum has been th is simply   simply setting industry. Lorem Ipsum has been th is simply setting industry. Lorem Ipsum has been the industry's standard dummy text ever since setting simply setting industry. Lorem Ipsum has been the industry's standard dummy text ever since setting industry. Lorem Ipsum has been the industry's standard dummy text ever since setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookthe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookthe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    const [open,setOpen] = useState(false)
    const router = useRouter()

    const handleOpen = () => {
        setOpen(!open)
    }

    return <Grid container className={styles.questionBackground} sx={{backgroundColor:"red",width:"100%",height:"100vh"}} justifyContent="center">
        <Grid item>
            <Card sx={{bgcolor:"#B8FFF9",maxWidth:"60em",mt:"2em",boxShadow:"21"}}>
                <CardContent sx={{pt:"0",pb:"0",boxShadow:"5"}}>
                <Typography variant='h4' sx={{mt:"5px",mb:"8px",fontFamily:"Bree Serif"}}>
                    {question.title}
                </Typography>
                </CardContent>
                <Divider />
                <Grid container direction = "column" justifyContent="space-between" sx={{}}>
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
                    <Grid item sx={{maxWidth:"57em",width:"57em"}}>
                        <Typography>
                            Answers
                        </Typography>
                        <List sx={{
                                bgcolor: '#EEEEEE',
                                position: 'relative',
                                overflow: 'scroll',
                                maxHeight: 300,
                                minHeight: "20em",
                                marginTop:"1em"
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