import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import {Tooltip} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import Book from './Book'
import Cart from '@material-ui/icons/ShoppingBasket'
import { c } from './Book'
const Books = (()=>{

    const [books,setBooks] = useState([])
    const count = useContext(c)

    useEffect((()=>{
        const fetchAllBooks = (async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data)   
            }
            catch(err){
                console.log(err)
            }
        })
        fetchAllBooks()
    }),[])

    return (
        <>

            <div className="books">

            <h1 className="bheading">Book Collection</h1>
            <Tooltip title = "Add More">
            <Button style={{position:"relative",left:"900px"}}>
            <Link to ="/add"><AddIcon style={{color:"black"}}/></Link>
            </Button>
            </Tooltip>

   
                <h1 style={{position:"absolute",left:"1000px", top:"83px"}}><Cart/>{count}</h1>


                {books.map((book)=>{
                    return <Book title={book.title} key = {book.id} id = {book.id} desc = {book.desc} cover = {book.cover}/>
                })}

            </div>
            
            
        </>
    )
})

export default Books