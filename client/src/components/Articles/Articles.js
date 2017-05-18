import React from 'react'

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
        </div>
      ))}
    </div>
  )
}

export default Articles
