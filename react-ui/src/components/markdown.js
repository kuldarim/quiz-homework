import React, { Component } from 'react';
import ReactMarkdown from 'react-remarkable';

class MarkDown extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const source = `### Task\n${this.props.kata.task}\n### Example\n${this.props.kata.example}\n\n${this.props.kata.footer}`;
    return (
      <ReactMarkdown source={source} />
    );
  }
}

export default MarkDown;
