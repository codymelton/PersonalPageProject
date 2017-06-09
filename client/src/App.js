import React, { Component } from 'react';
import $ from 'jquery'
import {container} from './App.css';
import {Navigation} from './components'

class App extends Component {
  state ={
    user: undefined
  }

componentDidMount = () => this.getUser();

  getUser(){
    $.ajax({
      url: '/api/get_user',
      method: 'GET'
    }).done((response) => {
      console.log("User:", response);
      this.setState({
        user: response
      })
    })
  }
  render() {
    return (
      <div className={container}>
        <Navigation />

        {this.state.user?
          React.cloneElement(this.props.children, {user: this.state.user }) :
          <h1> Loading </h1> }
      </div>
    );
  }
}

export default App;
