import React from "react";
import Add from './Add'
import Books from './Books'
import Update from './Update'
import Home from './Home'
import {  Routes , Route} from 'react-router-dom';
const App = (()=>{
    return (<>

        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/add" element ={<Add/>}/>
            <Route path="/books" element ={<Books/>}/>
            <Route path="/update/:id" element ={<Update/>}/>
        </Routes>
    </>)
})
export default App