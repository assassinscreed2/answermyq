import {Box, Button, Card, CardContent, Divider, Grid, Typography} from '@mui/material'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0';

export default function QuestionBlock({question,getQuestion}){
    const { user, error, isLoading } = useUser(); 
    console.log(question)
    const router = useRouter()

    async function handleDelete(){
      const deleteReq = await fetch(`http://localhost:3001/question/${question._id}`,{method:"DELETE"})
      const data = await deleteReq.json()
      getQuestion()
      console.log(data)
    }

    return <>
    <Box sx={{maxWidth:"30em",boxShadow:"20",position:"static",borderRadius:"10%",ml:"0.6em",mt:"3em"}}>
      <Card sx={{minHeight:"12em",maxHeight:"15em",bgcolor:"#DEEFE7",borderRadius:"5%"}}>
        <CardContent sx={{pt:"0",pb:"0",boxShadow:"revert"}}>
          <Typography sx={{mt:"5px",mb:"8px",fontFamily:"Bree Serif"}}>
            {question.title}
          </Typography>
        </CardContent>
        <Divider />
        <Grid container direction = "column" justifyContent="space-between" sx={{height:"100vh",maxHeight:"7.4em"}}>
          {/* Question */}
          <Grid item>
            <CardContent sx={{minHeight:"5.5em"}}>
              <Typography fontFamily="Cairo">
                {question.question.substring(0,125)} ...
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
              question.tags.map((tag,i)=>(
                <Grid item sx={{pr:"0.3em"}}>
                  <Typography sx={{fontSize:"0.8em",bgcolor:"#D9D9D9",display:"inline",px:"7px",py:"4px",borderRadius:"30%"}}>
                    {tag.label}
                  </Typography>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
        <Grid container direction = "row">
          <Grid item>
            <Button color="success" onClick={() => router.push(`/question/${question._id}`)}>Answer</Button>
          </Grid>
          {user && user.email === question.userid &&<>
            <Grid item>
            <Button color="warning" onClick={() => router.push(`/editpage/${question._id}`)}>Edit</Button>
          </Grid>
          <Grid item >
            <Button color="error" onClick={() => handleDelete()}>
                Delete
            </Button>
          </Grid>
          </>}
        </Grid>
      </Card>
    </Box>
    </>
}