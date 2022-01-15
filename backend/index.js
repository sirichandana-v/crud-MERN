import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRoutes from './routes/student.js'


const app=express();

app.use(cors());
app.use(bodyParser.json({limit:'20mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:true}));
app.use('/students', studentRoutes)





const CONNECTION_URL='mongodb+srv://siri123:Y9vTEGN8Mj2Rh7W@cluster0.t4one.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT=process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>app.listen(PORT,()=>{
    console.log(`Connection successful ${PORT}`)
})).catch(
    err=>console.log(err)
)



