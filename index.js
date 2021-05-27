const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = require('./src/models/config.model');

db.sequelize.sync();

app.get('/',(req,res)=>{
    res.json({message:"Wellcome to souq app :)"});
});

require('./src/routes/coupon.routes')(app);

const Port = process.env.PORT || 1234;
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
});

module.exports = app;