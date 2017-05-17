import React from 'react';

const EditArticleForm = props => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <label> Title: </label>
        <input type="text" value={props.title}
        placeholder="Title"
        onChange={(event) => props.updateField('title', event.target.value)}
        />
      </div>

      <div>
        <label> Author: </label>
        <input type="text" value={props.author}
        placeholder="Author"
        onChange={(event) => props.updateField('author', event.target.value)}
        />
      </div>

      <div>
        <label> Body: </label>
        <input type="text" value={props.body}
        placeholder="Body"
        onChange={(event) => props.updateField('body', event.target.value)}
        />
      </div>

      <div>
        <label> Draft?: </label>
        <input type="text" value={props.draft}
        placeholder="true or false"
        onChange={(event) => props.updateField('draft', event.target.value)}
        />
      </div>

      <button type="submit">Submit</button>

    </form>
  </div>
)

export default EditArticleForm;
