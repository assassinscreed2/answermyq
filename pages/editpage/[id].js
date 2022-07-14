import {Box, Button, Card, CardContent, Divider, Grid, Typography, List, ListItem, TextField} from '@mui/material'
import QuestionMainUtil from '../../components/Questionmain'
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router'
import {useState,useEffect} from 'react'
import EditPageUtil from '../../components/EditQuestion'

export default function EditPage(){

    const router = useRouter();
    const [question,setQuestion] = useState(null)

    useEffect(()=>{
        async function getQuestionById(){
            const data =  await fetch(`http://localhost:3001/question/test/${router.query.id}`);
            const question = await data.json()
            setQuestion(question)
            console.log("ab")
            console.log(question)
        }

        router.query.id && getQuestionById()
    },[router.query.id])


    return question && <EditPageUtil question = {question}/>
}