import React from 'react';

const PostArticleForm = (props) => (
  <div>
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Add new wisdom to the blog...</h3>
        <input onChange={(event) => props.updateTitle(event)} type='text' placeholder='Enter Title'/>
        <input onChange={(event) => props.updateAuthor(event)} type='text' placeholder='Enter Author'/>
        <input onChange={(event) => props.updateBody(event)} type='text' placeholder='Enter Body'/>
        <input onChange={(event) => props.updateDraft(event)} type='text' placeholder='true or false'/>
        <button type='submit'>Post</button>
    </form>
  </div>
)

export default PostArticleForm;
