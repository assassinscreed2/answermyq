import { Grid ,Backdrop, CircularProgress} from "@mui/material";
import QuestionBlock from "../../components/Questionblock";
import styles from '../../styles/Home.module.css'
import {useEffect,useState} from 'react'

export default function Question(){

    const [questions,setQuestions] = useState(null)
    const [open, setOpen] = useState(true);
    const handleClose = () => {
      setOpen(false);
    };

    async function getQuestions(){
        await fetch('/api/question').then((res)=>{
            console.log(res);
            return res.json();
        }).then((res)=>{
            console.log(res)
            const fetchQuestions = res;
            console.log("Fetched Question",fetchQuestions)
            setQuestions(fetchQuestions)
            handleClose();
        }).catch(e=>console.log(e))
    }

    useEffect(()=>{
        getQuestions();
    },[])

    return  <Grid container direction = "row" justifyContent="center" className={styles.customBackground} sx={{height:"100%",backgroundColor:"red",width:"100%",minHeight:"100vh"}}>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open}
                                >
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                {questions && questions.map((question,i)=>(<Grid item key={i} md={4} ><QuestionBlock key={i} getQuestion = {getQuestions} question={question}/></Grid>))}
            </Grid>
}