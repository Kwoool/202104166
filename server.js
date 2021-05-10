const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
//npm install cors

app.get('/',(req,res)=>{
    res.json({
        success:true,
    })
});

app.listen(3000,()=>{
    console.log('server start prot 3000');
});