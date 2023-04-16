const express =  require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'student'
})

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connect SUCCESS');
    }
})


app.post('/insert', async (req,res)=>{
    const {studentid,name,lastname,email,faculty} = req.body;

    try{
        db.query(
            "INSERT INTO info(student_id, fname, lname, email, faculty) VALUES(?,?,?,?,?)",
            [studentid,name,lastname,email,faculty],
            (err,results,field)=>{
                if(err){
                    console.log(err);
                    return res.status(400).send();
                }
                else{
                    return res.status(201).send();
                }
            }
        )
    }
    catch(err){
        console.log(err);
        return res.status(500).send();
    }

})




app.get('/getdata',(req,res)=>{
    db.query(`SELECT * FROM info`,(err,results,field)=>{
        if(err){
            console.log(err);
        }

        res.json(results);
    })
})









app.listen('4444',()=>{
    console.log('SUCCESSFUL ON PORT 4444');
})
