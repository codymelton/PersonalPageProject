import React, { Component } from 'react';
import {PostArticleForm} from '../../components';
import $ from 'jquery';
import { browserHistory } from "react-router";

class PostArticleContainer extends Component {
  state = {
    title: undefined,
    author: undefined,
    body: undefined,
    draft: undefined
  }

  handleSubmit = this.handleSubmit.bind(this)


  handleSubmit(event){
    event.preventDefault()

    const article={
      title: this.state.title,
      author: this.state.author,
      body: this.state.body,
      draft: this.state.draft
    }

    console.log("Pre ajax", article);
    $.ajax({
      url: "/api/articles",
      method: "POST",
      data: article
    }).done((response) => {
      browserHistory.push("/articles")
    })
  }

  updateTitle=(event) => this.setState({
    title: event.target.value
  })

  updateAuthor=(event) => this.setState({
    author: event.target.value
  })

  updateBody=(event) => this.setState({
    body: event.target.value
  })

  updateDraft=(event) => this.setState({
    draft: event.target.value
  })

  render() {
    return(
      <div>
        <PostArticleForm handleSubmit={this.handleSubmit}
                         updateTitle={this.updateTitle}
                         updateAuthor={this.updateAuthor}
                         updateBody={this.updateBody}
                         updateDraft={this.updateDraft} />
      </div>
    )
  }
}

export default PostArticleContainer;
