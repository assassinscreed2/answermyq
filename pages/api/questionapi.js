// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getQuestions(req,res){

  if(req.method == 'GET'){
    const questions = await fetch('http://localhost:3001/question/test');
    const data = await questions.json();
    //res.json(data)
    res.json(data)
  }else if (req.method == 'POST'){
    const postdata = await fetch('http://localhost:3001/question',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(req.body)
    })
    const data = await postdata.json();
    console.log(data)
    res.json(data)
  }
}
