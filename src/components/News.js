import React from 'react'
import { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'
  export default function News(passed) {
    const [data,changedata]=useState([])
    const [pager,setpager]=useState(1);
    useEffect(()=>{
      const fetchAPI=()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=510ea081419a442c9c9d0852e3a8d5f5&page=${pager}&category=${passed.cate}`)
      .then(function (response) {
        changedata(response.data.articles);
      })
   }
   fetchAPI();
   },[pager,passed.cate])
  const redu= ()=>{
        setpager(pager-1);    
    }
    const incr=()=>{
        setpager(pager+1);   
    }
    return (
      <div key={pager}>
      <div className="row">
      <img src="https://img.freepik.com/free-vector/gorilla-head-monochrome-style_225004-456.jpg?size=626&ext=jpg" style={{width:'100px',height:'70px'}} className="my-3" alt="..."/>
      <h1 className="col-2"> </h1>
      <h1 className="col-6 my-4 text-center">NewsMonkey-{passed.cate?passed.cate:"Headlights"}</h1></div>
      <div className="row mx-0">
      {data.map((news)=>{
        return <NewsItem key={news.url} dat={news}/>
      })}
      <div className="d-flex justify-content-between mb-5">
      <button type="button" onClick={redu} className="btn btn-dark">Previous</button>
      <button type="button" onClick={incr} className="btn btn-dark">Next</button>
      </div>
      </div>
      </div>

    )
  }