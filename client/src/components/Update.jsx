import React from "react";
import { useState, } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import {Tooltip} from '@material-ui/core';
import axios from "axios";
import Upd from '@material-ui/icons/Update';
const Update = (()=>{

    const [book,setBooks] = useState({
        title : "",
        desc : "",
        cover : ""
    })

const navigate = useNavigate()
// getting the id by path name slpinting
const location = useLocation()
const bookid = location.pathname.split("/")[2]



const handelChange = ((e)=>{
   setBooks((prev)=>({...prev,[e.target.name]: e.target.value}))

})
// passing the data to backend 
const handelClick = ( async (e)=>{
    e.preventDefault()

    try{
        await axios.put("http://localhost:8800/books/"+bookid,book)
        navigate("/")
    }
    catch(err){
        console.log(err)
    }
})
    return (
        <>
        <div className="form">
        <h1 className="aheading">Update The Book </h1>
            <label>Enter the Title</label><br/>
                 <input type="text"  onChange={handelChange}  name= "title"/><br/><br/>
                 <label>the Discription</label><br/>
                 <input type="text" onChange={handelChange}   name= "desc"/><br/><br/>
                 <label>Cover Image Source</label><br/>
                <input type="text" onChange={handelChange}  name= "cover"/><br/><br/>
                <Button onClick={handelClick}><Upd/></Button>
                </div> 
        </>
    )

})
export default Update