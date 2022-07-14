import {Box, Button, Card, CardContent, Divider, Grid, Typography, List, ListItem, TextField} from '@mui/material'
import QuestionMainUtil from '../../components/Questionmain'
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router'
import {useState,useEffect} from 'react'

export default function QuestionMain(){

    const router = useRouter();
    const [question,setQuestion] = useState(null)

    useEffect(()=>{
        async function getQuestionById(){
            const data =  await fetch(`https://answermeapi1.herokuapp.com/question/test/${router.query.id}`);
            const question = await data.json()
            setQuestion(question)
            console.log("ab")
            console.log(question)
        }

        router.query.id && getQuestionById()
    },[router.query.id])


    return question && <QuestionMainUtil question = {question}/>
}