const mongoose = require('mongoose');
const Question = mongoose.model('Question');
import connect from '../../../db'

export default async function handleQuestionByID(req,res){
    
    connect().catch((err)=>{
        res.send(console.error())
    })

    if(req.method === 'GET'){
        const questionById = await Question.findById(req.query.id)
        return res.json(questionById)
    }else if(req.method === 'PATCH'){
        const {body, query:{id}} = req;
        try{
            const newQuestion = await Question.findOneAndUpdate({_id:id},body,{new:true,runValidators:true})
            return res.json(newQuestion)
        }catch(e){
            return res.status(422).send(error.message);
        }
    }else if(req.method === 'DELETE'){
        try{
            const deleted = await Question.findOneAndRemove({_id:req.query.id})
            return res.json(deleted)
        }catch(e){
            return res.status(422).send(error.message);
        }
    }

    return res.json({error:"Invalid Request in ID"})
    
}