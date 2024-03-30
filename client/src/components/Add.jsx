import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import axios from "axios";
const Add = (()=>{

    const [book,setBooks] = useState({
            title : "",
            desc : "",
            cover : ""
        })

    const navigate = useNavigate()
    
    const handelChange = ((e)=>{
       setBooks((prev)=>({...prev,[e.target.name]: e.target.value}))
    
    })
    console.log(book)



    // passing the data to backend 
    const handelClick = ( async (e)=>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8800/books",book)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }
    })
    return (
        <>
            <div className="form">
                <h1 className="aheading">Add New Book</h1>

                <label>Enter the Title</label><br/>
                <input type="text"   onChange={handelChange} name= "title"/><br/><br/>
                <label>the Discription</label><br/>
                <input type="text"   onChange={handelChange} name= "desc"/><br/><br/>
                <label>Cover Image Source</label><br/>
                <input type="text"  onChange={handelChange} name= "cover"/><br/><br/>

                <Button onClick={handelClick}><Link to ="/add"><AddIcon/></Link></Button>
            </div>
        </>
    )
})
export default Add