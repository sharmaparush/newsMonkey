import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(passed) {
  const [cat,changecat]=useState("");
  const [help,helper]=useState("");
  const onClick=(event)=>{
    const t=event.target.value
    changecat(t.toLowerCase());
  }
  const onsubmit=(event)=>{
    event.preventDefault();
    helper(cat);
  }
  
  const buttoncheck=(category)=>{
    helper(category)
    changecat(help)
    
  }
  useEffect(()=>{
    passed.categoryChanger(help)
  },[help,passed])
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button  className="nav-link my-1 active" onClick={()=>buttoncheck("Headlights")} aria-current="page">Home</button>
        </li>
        <li className="nav-item">
          <button  className="nav-link my-1" onClick={()=>buttoncheck("science")} aria-current="page">Science</button>
        </li>
        <li className="nav-item">
          <button  className="nav-link my-1" onClick={()=>buttoncheck("sports")} aria-current="page">Sports</button>
        </li>
        <li className="nav-item">
          <button  className="nav-link my-1" onClick={()=>buttoncheck("technology")} aria-current="page">Technology</button>
        </li>
        <li className="nav-item">
          <button  className="nav-link my-1" onClick={()=>buttoncheck("health")} aria-current="page">Health</button>
        </li>
        <li className="nav-item">
          <button  className="nav-link my-1" onClick={()=>buttoncheck("business")} aria-current="page">Business</button>
        </li>
        <li className="nav-item">
          <button  className="nav-link my-1" onClick={()=>buttoncheck("entertainment")} aria-current="page">Entertainment</button>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" onChange={onClick} aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={onsubmit} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}
