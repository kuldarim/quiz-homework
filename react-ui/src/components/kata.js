import React, { Component } from 'react';
import { connect } from 'react-redux';

import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import { putChangeTestStatus, putChangeSolution } from '../redux/reducers/reducer';

import ReactMarkdown from 'react-remarkable';
import { Button } from 'reactstrap';
import RunTests from './run-tests';
import './kata.css';

class Kata extends Component {
  
  onChange(newValue) {
    this.props.putChangeSolution(this.props.kata.id, newValue)
  }
  
  constructor(props) {
    super(props);
    this.state = {
      solution: () => {}
    };
    this.onChange = this.onChange.bind(this);
  }
  
  render() {
    const source = `### Task\n${this.props.kata.task}\n### Example\n${this.props.kata.example}\n\n${this.props.kata.footer}
    `;
    return (
      <div>
        <ReactMarkdown source={source} />
        <div className="editor-container">
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
          <RunTests kata={this.props.kata}/>
        </div>
      </div>
    );
  }
}

const mapDispatch = {putChangeTestStatus, putChangeSolution};
export default connect(null, mapDispatch)(Kata);
