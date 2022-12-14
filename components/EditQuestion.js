import {Button, Card, CardContent, Divider, Grid, Typography, TextField} from '@mui/material'
import styles from '../styles/Home.module.css'
import {useState, useRef} from 'react'
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import {useRouter} from 'next/router'

export default function EditPageUtil({question}){

    const [chipData, setChipData] = useState(question.tags);
    const titleRef = useRef()
    const questionRef = useRef()
    const inputRef = useRef()
    const router = useRouter()

    async function handleQuestion(){

        const questionData = {
            title:titleRef.current.value,
            question:questionRef.current.value,
            tags:chipData,
            answer:question.answer
        }

        const data = await fetch(`/api/question/${question._id}`,{
            method:'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(questionData)
         }).then(()=>{
            router.push('/question')
         })
    }

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
      }));

    

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handleTags = () => {
        const text = inputRef.current.value
        if(chipData.length < 4){
            if(text != ""){
                if(text.length > 10){
                    text = text.substring(0,10)
                }
                setChipData((prev) => [...prev,{key: chipData.length,label: text}])
            }
        }else{
            alert("Maximum can be 3")
        }
    }

    return <Grid container className={styles.questionBackground} sx={{backgroundColor:"red",width:"100%",height:"100vh"}} justifyContent="center">
        <Grid item>
            <Card sx={{bgcolor:"#B8FFF9",maxWidth:"60em",width:"57em",boxShadow:"21",marginTop:"1em"}}>
                <CardContent sx={{pt:"0",pb:"0"}}>
                <Typography variant='h4' sx={{mt:"5px",mb:"8px",fontFamily:"Bree Serif"}}>
                    Enter Title
                </Typography>
                <TextField inputRef={titleRef} sx={{backgroundColor:"white"}} fullWidth defaultValue={question.title}/>
                </CardContent>
                <Divider />
                <Grid container direction = "column" justifyContent="space-between">
                {/* Question */}
                    <Grid item>
                    <CardContent>
                        <TextField
                            sx={{width:"100%",backgroundColor:"white"}}
                            inputRef={questionRef}
                            multiline
                            rows={15}
                            defaultValue={question.question}
                            />
                    </CardContent>
                    </Grid>
                    <Divider />
                {/* tags */}
                <Grid item container direction = "row">
                    <Grid item
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0.5,
                            m: 0,
                        }}
                        component="ul"
                        sm
                        >
                        {chipData.map((data) => {
                            return (
                            <ListItem key={data.key}>
                                <Chip
                                sx = {{backgroundColor:"white"}}
                                label={data.label}
                                onDelete={handleDelete(data)}
                                />
                            </ListItem>
                            );
                        })}
                    </Grid>
                    <Grid item container sm alignItems="center">
                        <Grid item><Button onClick={(e) => handleTags(e)}>Add Tags</Button></Grid>
                        <Grid item><TextField inputRef={inputRef} size="small" sx={{backgroundColor:"white"}} /></Grid>
                    </Grid>
                </Grid>
                </Grid>
                
                {/* buttons */}
                <Grid container direction = "row" sx={{mt:"1em"}} justifyContent="flex-end">
                    <Grid item sx={{mr:"2em"}}>
                        <Button color="error" onClick={() => {handleQuestion()}}>
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    </Grid>
}