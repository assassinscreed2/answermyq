import { Grid } from "@mui/material";
import QuestionBlock from "../../components/Questionblock";
import styles from '../../styles/Home.module.css'
import {useEffect,useState} from 'react'

export default function Question(){

    const [questions,setQuestions] = useState(null)
    const ans = [1,2,3,4]
    
    if(questions){
        console.log(questions)
    }else{
        console.log("waiting")
    }

    async function getQuestions(){
        const data = await fetch('http://localhost:3001/question/test');
        const fetchQuestions = await data.json();
        setQuestions(fetchQuestions)
    }

    useEffect(()=>{
        getQuestions();
    },[])

    return  <Grid container direction = "row" justifyContent="center" className={styles.customBackground} sx={{height:"100%",backgroundColor:"red",width:"100%",minHeight:"100vh"}}>
                {questions && questions.map((question,i)=>(<Grid item key={i} md={4}><QuestionBlock key={i} getQuestion = {getQuestions} question={question}/></Grid>))}
            </Grid>
}