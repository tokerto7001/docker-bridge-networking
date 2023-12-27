const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    try{
        console.log('Test request is handled successfully');
    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Receiver server is awake at port ${process.env.PORT || 8000}`)
})