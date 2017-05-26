import React, { Component } from 'react';
import $ from 'jquery';
import {SingleArticle} from '../../components';

class SingleArticleContainer extends Component {

  state = {
    title: undefined,
    author: undefined,
    body: undefined,
    draft: undefined,
    article: undefined,
    text: undefined
  }

  componentDidMount = () => this.loadArticle();

  loadArticle(){
    $.ajax({
      url: `/api/articles/${this.props.params.articleId}`,
      method: "GET"
    }).done(response => {
      console.log(response);
      this.setState({ article: response.data})
    })
  }



  render() {
    return(
      <div>
        {this.state.article
          ? <SingleArticle article={this.state.article}
                           submitComment={this.submitComment}
                           text={this.state.text}/>
          :undefined}
      </div>
    )
  }

}

export default SingleArticleContainer;
