const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser()); 

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{console.log("Conected to MONGO.db")});

const postRouter=require('./routes/posts');
const userRouter=require('./routes/users');

app.use('/posts',postRouter);
app.use('/users',userRouter);

app.listen(port);