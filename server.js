const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./server/api')
const port = 3000
const app =express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',api)
app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(port,function(){
    console.log('listening at port 3000!!!')
})
