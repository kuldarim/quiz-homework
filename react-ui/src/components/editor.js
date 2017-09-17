import React, { Component } from 'react';
import { connect } from 'react-redux';

import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import { putChangeSolution } from '../redux/reducers/reducer';

class Editor extends Component {
  
  onChange(newValue) {
    this.props.putChangeSolution(this.props.kata.id, newValue)
  }
  
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        name={`${this.props.kata.id}`}
        onChange={this.onChange}
        value={this.props.kata.solution}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    );
  }
}

const mapDispatch = { putChangeSolution };
export default connect(null, mapDispatch)(Editor);
