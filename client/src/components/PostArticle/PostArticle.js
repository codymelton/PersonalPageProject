import React from 'react';

const PostArticleForm = (props) => (
  <div>
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Add new wisdom to the blog...</h3>
        <input onChange={(event) => props.onChange("title", event.target.value)} type='text' placeholder='Enter Title'/>
        <input onChange={(event) => props.onChange("author", event.target.value)} type='text' placeholder='Enter Author'/>
        <input onChange={(event) => props.onChange("body", event.target.value)} type='text' placeholder='Enter Body'/>
        <input onChange={(event) => props.onChange("draft", event.target.value)} type='text' placeholder='true or false'/>
        <button disabled={!props.valid} type='submit' className="btn btn-default">Post</button>
    </form>
  </div>
)

export default PostArticleForm;
