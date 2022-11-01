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
        const data = await fetch(`/api/question`);
        console.log("data is " +data);
        const text = await data.text();
        console.log("text -> "+text);
        const fetchQuestions = await data.json();
        console.log("Fetched Question",fetchQuestions)
        setQuestions(fetchQuestions)
        handleClose();
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