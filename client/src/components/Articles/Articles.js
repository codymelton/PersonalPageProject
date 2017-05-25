import React from 'react'
import { Link } from 'react-router';

const Articles = (props) => {
  return(
    <div>
      <div className="jumbotron">
        <h1> Your blog articles are... </h1>
      </div>
      {props.articles.map((item, index) => (
        <div key={index}>
          <ul key={index}>
            <li> <h3>{item.title}</h3> </li>
            <li> <h4>By: {item.author}</h4> </li>
            <li> <p>{item.body}</p> </li>
          </ul>
        <Link className="btn btn-default" to={`/single_article/${item._id}`}>View</Link>
        <Link className="btn btn-warning" to={`/edit_article/${item._id}`}>Edit</Link>
        <button className="btn btn-danger" onClick={ (event) => props.deleteById(event, item._id) }>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Articles
