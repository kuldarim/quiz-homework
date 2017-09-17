import React, { Component } from 'react';

import MarkDown from './markdown';
import RunTests from './run-tests';
import Editor from './editor';
import './kata.css';

class Kata extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <MarkDown kata={this.props.kata} />
        <div className="editor-container">
          <Editor kata={this.props.kata} />
          <RunTests kata={this.props.kata} />
        </div>
      </div>
    );
  }
}

export default Kata;
