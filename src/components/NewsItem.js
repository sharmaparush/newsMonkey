import React from 'react'
import {Link} from 'react-router-dom'
export default function NewsItem(passed) {
  return (
    <div className="card my-3 mx-auto" style={{width: '18rem'}} >
    <Link to={passed.dat.url} target="_blank"  style={{color:'black'}}>
  <img src={passed.dat.urlToImage?passed.dat.urlToImage:'https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?w=740&t=st=1689355858~exp=1689356458~hmac=220141194590449ca432a2b06913334d1d19e89b72d81d37699c32b8cfa5a8c3'} className="card-img-top rounded-3" alt="..." style={{height:'170px',width:'260px'}}/>
  <div className="card-body" >
    <h5 className="card-title">{passed.dat.title}</h5>
    <p className="card-text">{passed.dat.description}</p>
    <p className="card-text"><b>{passed.dat.author}</b></p>
  </div>
  </Link>
</div>
  )
}
