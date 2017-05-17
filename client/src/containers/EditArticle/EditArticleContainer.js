import React, { Component } from 'react';
import {EditArticleForm} from '../../components';
import $ from 'jquery';

class EditArticleContainer extends Component{

  state = {
    isFetching: true,
    title: undefined,
    author: undefined,
    body: undefined,
    draft: undefined
  }

  updateField = this.updateField.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  componentDidMount = () => this.loadArticles();

  updateField(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  loadArticles() {
    $.ajax({
      url: `/api/articles/${this.props.params.articleId}`,
      method: "GET"
    }).done(response => {
      this.setState({ title: response.title,
                      author: response.author,
                      body: response.body,
                      draft: response.draft,
                      isFetching: false
                    });
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    const data = {
      title: this.state.title,
      author: this.state.author,
      body: this.state.body,
      draft: this.state.draft
    }
    $.ajax({
      url: `/api/articles/${this.props.params.articleId}`,
      method: 'PUT',
      data: data
    }).done(response => {
      console.log(response);
    })
  }

  render(){
    return(
      <div>
        <h3>{ this.props.params.articleId }</h3>
        {!this.state.isFetching ?
          <EditArticleForm handleSubmit={this.handleSubmit}
                           updateField={this.updateField}
                           title={this.state.title}
                           author={this.state.author}
                           body={this.state.body}
                           draft={this.state.draft}
                           /> :
          <h2> Loading your article... </h2>
        }
      </div>
    )
  }
}

export default EditArticleContainer;
