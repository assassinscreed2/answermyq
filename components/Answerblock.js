import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import {useRef} from 'react'
import { useUser } from '@auth0/nextjs-auth0';

export default function AnswerBlock({handleOpen,question}){
    const answerRef = useRef()
    const { user, error, isLoading } = useUser(); 

    async function postAnswer(){
        const tempQuestion = question
        tempQuestion.answer.push(answerRef.current.value);
        const postData = await fetch(`http://lopsided-insidious-aftershave.glitch.me/question/${question._id}`,{
            method: "PATCH",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(tempQuestion)
        })

        const updatedData = await postData.json();
    }

    return <>
        <Grid sx={{maxWidth:"40em"}}>
            <Card sx={{backgroundColor: "#faffff",backgroundImage: `url("https://www.transparenttextures.com/patterns/binding-light.png")`}}>
                <CardContent>
                    <Typography>Your Answer</Typography>
                </CardContent>
                <CardContent>
                    <TextField
                        inputRef={answerRef}
                        sx={{width:"100%"}}
                        label="Answer"
                        multiline
                        rows={10}
                        />
                </CardContent>
                <Grid container justifyContent="space-around">
                    <Grid item>
                        <Button onClick={()=>handleOpen()}>Cancel</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={()=>{postAnswer(); handleOpen();}}>POST</Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    </>
}