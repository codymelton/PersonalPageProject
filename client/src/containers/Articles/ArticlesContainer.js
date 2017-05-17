import React, {Component} from 'react';
import $ from 'jquery';
import {Articles} from '../../components';

class ArticlesContainer extends Component {

  state = {
    articles: undefined
  }

  componentDidMount = () => this.loadArticles();

  loadArticles() {
    $.ajax({
      url: "/api/articles",
      method: "GET"
    }).done(response => {
      console.log(response);
      this.setState({ articles: response.data });
    });
  }

  render() {
    return(
      <div>
        {this.state.articles
          ? <Articles articles={this.state.articles} />
          : undefined}
      </div>
    )
  }
}

export default ArticlesContainer
