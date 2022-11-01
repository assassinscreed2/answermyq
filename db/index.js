const config = require('../config')
const mongoose = require('mongoose')


const connect = async () => {
        await mongoose.connect(config.DB_URL,{
            useNewUrlParser : true,
            useUnifiedTopology:true
            }
            ,(err)=>{
            if(err){console.log(err); return err}
            else{
                console.log("Mongoose connected")
            }
        })
    }


export default connect;