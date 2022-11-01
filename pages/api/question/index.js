const mongoose = require('mongoose');
const portfolio = require('../../../db/model/portfolio')
const Question = mongoose.model('Question');
import connect from '../../../db'

export default async function getQuestions(req,res){

    connect().catch((err)=>{
        res.send(console.error())
    })

    if(req.method === 'GET'){
        await Question.find().then(
            (response)=>{
                return res.json(response)
            }
        );
    }else if(req.method === 'POST'){
        const data = req.body;
        const question = new Question(data)
        try{
        const newQuestion = await question.save()
        return res.json(newQuestion)
        }catch(e){
        }
    }
    
    return res.json({error:"Invalid request"})
    
}