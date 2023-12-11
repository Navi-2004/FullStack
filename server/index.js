const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const bodyParser=require('body-parser');

const app=express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const db=mysql.createConnection({

    host:'localhost',
    user:"root",
    password:"",
    database:"screening",

})



app.get("/",(req,res)=>{
    // res.send("Hello World");
    sql="SELECT * FROM employee";
    db.query(sql,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
            res.json(data);
        }
    })

});

app.post("/create",(req,res)=>{
    const sql="INSERT INTO employee (`Name`,`Dept`,`Designation`,`Salary`,`Address`,`DOB`) VALUES (?,?,?,?,?,?)";
    db.query(sql,[req.body.name,req.body.dept,req.body.desig,req.body.salary,req.body.address,req.body.dob],(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
            console.log("Data Inserted");
            res.json(data);
        }
    })
})

app.put("/update/:id",(req,res)=>{
    const sql="UPDATE employee SET `Name`=?,`Dept`=?,`Designation`=?,`Salary`=?,`Address`=?,`DOB`=? WHERE `id`=?";
    db.query(sql,[req.body.name,req.body.dept,req.body.desig,req.body.salary,req.body.address,req.body.dob,req.params.id],(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
            console.log("Data Updated");
            res.json(data);
        }
    })
})

app.delete("/delete/:id",(req,res)=>{
    const sql="DELETE FROM employee WHERE `id`=?";
    db.query(sql,[req.params.id],(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
            console.log("Data Deleted");
            res.json(data);
        }
    })
}
)


app.listen(5000,()=>{
    console.log('Server running on port 5000');
});