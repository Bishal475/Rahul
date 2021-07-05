const express = require('express');
const app = express();
const cors = require('cors');
const user = require('./route/user')


var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json());
app.use("/api/user",user);


app.listen(3000,() => console.log('Listening on Port 3000........'));

