import React from 'react';
import { CommentsContainer } from '../../containers';

const SingleArticle = (props) => {
  return(
    <div>
      <div>
        <h1> {props.article._id} </h1>
      </div>
      <div>
        <div><h3>{props.article.title}</h3></div>
        <div><h4>{props.article.author}</h4></div>
        <div><p>{props.article.body}</p></div>
      </div>
      <div>
        <CommentsContainer id={props.article._id} />
      </div>
    </div>
  )
}

export default SingleArticle;
