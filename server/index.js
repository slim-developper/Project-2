
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);


const CONNECTION_URL = 'mongodb+srv://javascriptmaster:k8Nmw48Fotd0k9TA@cluster0.ibwb3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 8001;
//password:k8Nmw48Fotd0k9TA
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{

err? console.log(err) : console.log('DATABASE CONNECTED SUCCESSFULLY')

})

  app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`))

mongoose.set('useFindAndModify', false);
//project:MERN_two


