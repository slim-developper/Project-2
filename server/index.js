import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/posts.js'

const app = express();

app.use(express.json())

// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/' , router)


const CONNECTION_URL = 'mongodb+srv://javascriptmaster:k8Nmw48Fotd0k9TA@cluster0.ibwb3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 8001;
//password:k8Nmw48Fotd0k9TA
//password_partthree:7MChiqW2giKrgu35
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{

err? console.log(err) : console.log('DATABASE CONNECTED SUCCESSFULLY')

})

  app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`))

mongoose.set('useFindAndModify', false);
//project:MERN_two


