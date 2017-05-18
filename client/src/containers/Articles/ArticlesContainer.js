import React, {Component} from 'react';
import $ from 'jquery';
import {Articles} from '../../components';
import {browserHistory} from 'react-router';

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

  deleteById = this.deleteById.bind(this)

    deleteById(event){
      event.preventDefault();
      console.log("I prevented the default");
      $.ajax({
        url: `/api/articles/${this.props.params.article_id}`,
        method: "DELETE"
      }).done((response) => browserHistory.push("/articles"))
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
