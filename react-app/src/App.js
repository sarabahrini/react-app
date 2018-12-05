import React, { Component } from 'react';
import superagent from 'superagent';
import Header from './components/header.js';
import Page from './components/page.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      title: 'Katherine Smith',
    };
  }

  componentDidMount() {
    superagent('get', 'https://full-stack-project-web-server.herokuapp.com/content')
      .then(results => {
        this.setState({ content: results.body });
      })
      .catch(console.error);
  }

  render() {
    const navLinks = this.state.content.map((obj,idx) =>
      <a key={'deck'+(idx+1)} href={'#deck'+(idx+1)}>{obj.deckTitle}</a>);
    return (
      <React.Fragment>
        <Header title={this.state.title}>
          {navLinks}
        </Header>
        <Page content={this.state.content}/>
      </React.Fragment>
    );
  }
}

export default App;
