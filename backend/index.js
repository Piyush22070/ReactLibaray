import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors'


// App
const app = express()


//Dabaseat
const db = mysql.createConnection({
    host : "localhost",
    user : "root", 
    password : "root123",
    database : "react1"
})

app.use(express.json())
app.use(cors())


// json Home
app.get("/",((req,res)=>{
    res.json("Conneted")
}))

// jSon Books
app.get("/books",((req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,((err,data)=>{
        if(err){
            res.json(err)
        }
        res.json(data)
    }))
}))

// jSon add
app.post("/books",(req,res)=>{
    const q = "iNSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
    ] 
    db.query(q,[values],((err,data)=>{
        if(err){
            res.json(err)
        }
        res.json(data)
    }))
})

//json delete
app.delete('/books/:id',(req,res)=>{
    console.log("Reached")
    const bookid = req.params.id
    const q = "DELETE FROM books WHERE id = ?"
    db.query(q,[bookid],((err,data)=>{

        if(err){
           return  res.json(err)
        }
        return  res.json("Books has been delete ")
    }))
})


//json upadte
app.put('/books/:id',(req,res)=>{
    console.log("Reached")
    const bookid = req.params.id
    const q = "UPDATE books SET `title` = ? ,`desc`= ?, `cover`= ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
    ]
    db.query(q,[...values,bookid],((err,data)=>{

        if(err){
           return  res.json(err)
        }
        return  res.json("Books has been Updated")
    }))
})


//json finallly
app.listen(8800,()=>{
    console.log("Connected to bakend")
})

