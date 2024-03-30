import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import Update from '@material-ui/icons/Update';
import Book from '@material-ui/icons/Book';
import React from 'react';
import { Link } from 'react-router-dom';
import {Tooltip} from '@material-ui/core';
const Home = (()=>{

    return (
        <>
        <div className="home">
            <h1 className="heading">React Libraray</h1>
            <h6>Piyush Bhoyar</h6>
            <Tooltip title = "Books "><Button><Link to="/books"><Book style={{color:"black"}}/></Link></Button></Tooltip>
            <Tooltip title = "Add"><Button><Link to ="/add"><AddIcon style={{color:"black"}}/></Link></Button></Tooltip>
            <Tooltip title = "Update"><Button><Link to ="/update"><Update style={{color:"black"}}/></Link></Button></Tooltip>
            </div>
        </>
    )
})
export default Home


