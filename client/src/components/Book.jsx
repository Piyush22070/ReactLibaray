import React, { createContext, useState } from "react";
import Button from '@material-ui/core/Button'
import {Tooltip} from '@material-ui/core';
import Cart from '@material-ui/icons/ShoppingBasket';
import DeleteIcon from '@material-ui/icons/Delete'
import axios from "axios";
import { Link } from 'react-router-dom';
import Update from '@material-ui/icons/Update';

const c = createContext()

const Book = ((book)=>{

    const [count,setCount] = useState(0)
    

    const incCount = ()=>{
        setCount(count+1)
    }

    const handelDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
        }
        catch(err){
            console.log(err)
            console.log(book.id)
        }
    }
    const handelUpdate = async (id)=>{
        try{

            await axios.update()
        }
        catch(err){
            console.log(id)
        }
    }
    
    return (
        <>
        <c.Provider value={count}>
            <div className="list">

                <center><div className="book">
                    {book.cover && <img src = {book.cover} alt ="/" width="240px" height="300px" />}
                    <h1>{book.title}</h1>
                    <h5>{book.desc}</h5>
                    <Tooltip title = "Update"><Button ><Link to = {`/update/${book.id}`}><Update style={{color:"black",position:"relative",top:"4px"}} /></Link></Button></Tooltip>
                    <Tooltip title = "Delete"><Button onClick={()=>{handelDelete(book.id)}}><DeleteIcon/></Button></Tooltip>
                </div>
                </center>
            </div>
            </c.Provider>

        </>
    )
})
export default Book;
export {c}