import React,  { Component } from 'react';
import $ from 'jquery';
import {Comments} from "../../components"

class CommentsContainer extends Component {

  state = {
    comments: undefined,
    text: undefined
  }

  submitComment = this.submitComment.bind(this);
  loadComments = this.loadComments.bind(this);
  componentDidMount = () => this.loadComments();

  loadComments() {
    console.log(this.props.id);
    $.ajax({
      url: `/api/articles/${this.props.id}`,
      method: "GET"
    }).done(response => {
      console.log("Response from loadComments:",response);
      this.setState({ comments: response.data.comments})
    })
  }

  submitComment(event){
    event.preventDefault();
    if (!this.state.text || this.state.text.length < 1){
      alert("You didn't type a comment about this article!")
      return
    }
    let newComment = { comment: this.state.text }
    $.ajax({
      url: `/api/articles/comments/${this.props.id}`,
      method: "POST",
      data: newComment
    }).done((response)=> {
      console.log("response: ");
      this.setState({ text: undefined })
      this.loadComments()
    })
  }

  updateText = (event) => this.setState({ text: event.target.value })

  render() {
    return (
      <div className="">
        {this.state.comments
          ? <Comments comments={this.state.comments}
                      text={this.state.text}
                      loadComments={this.loadComments}
                      submitComment={this.submitComment}
                      updateText={this.updateText}/>
          : undefined}

      </div>
    )
  }
}

export default CommentsContainer;
