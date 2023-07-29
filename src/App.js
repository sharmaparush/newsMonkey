import React,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
} from "react-router-dom";
export default function App(){
  const [cate,changecate]=useState("")
  const categoryChanger=(passed)=>{
    changecate(passed);
   }
   
    return (
      <Router>
      <>
      <Navbar categoryChanger={categoryChanger}/>
      <News cate={cate}/>
      </>
      </Router>
    )
  }

