
import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import axios from 'axios'
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{

    axios.get('http://ec2-54-215-32-211.us-west-1.compute.amazonaws.com:3000/api/partner-stores')
  .then(function (response) {
    // handle success
   res.send(response.data);
  })
});

app.listen(3300, ()=> console.log("Yes"))