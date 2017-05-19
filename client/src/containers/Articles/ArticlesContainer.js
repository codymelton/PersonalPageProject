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
      let articles = response.data.reverse(); // reverses array.
      this.setState({ articles: articles}); // can just use 1 word since repeated.
    });
  }

  deleteById = this.deleteById.bind(this)

    deleteById(event, _id){
      event.preventDefault();
      $.ajax({
        url: `/api/articles/${_id}`,
        method: "DELETE"
      }).done((response) => this.setState({ articles: response.data }))
    }

  render() {
    return(
      <div>
        {this.state.articles
          ? <Articles articles={this.state.articles}
                      deleteById={this.deleteById}/>
          : undefined}
      </div>
    )
  }
}

export default ArticlesContainer
