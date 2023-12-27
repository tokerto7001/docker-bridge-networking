const { default: axios } = require('axios');
const express = require('express');

const app = express();

const sendRequest = async() => {
    try{
        const request = await axios.get('http://receiver-container:8000/test');
        console.log(request);
    }catch(err){
        console.log(err)
    }
}

app.listen(process.env.PORT || 8001, () => {
    console.log(`Sender server is awake at port ${process.env.PORT || 8001}`)
})

sendRequest();