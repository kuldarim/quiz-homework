import React, { Component } from 'react';
import { connect } from 'react-redux';

import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import { putChangeTestStatus, putChangeSolution } from '../redux/reducers/reducer';

import ReactMarkdown from 'react-remarkable';
import { Button } from 'reactstrap';

import isEqual from 'lodash/isEqual';
import './kata.css';

class Kata extends Component {
  runTests() {
    this.props.kata.tests.forEach(({param, result}, i) => {
      try {
        const response = `
        self.onmessage=function(){
            postMessage(
              eval(((...params) => {${this.props.kata.solution}})(${JSON.stringify(param)}))
            )
           self.close()
      
          }
        `;

        const runnable = new Blob([response], { type: "text/javascript" });
        const worker = new Worker(window.URL.createObjectURL(runnable));

        worker.onmessage = (e) => {
          const evaluatedResult = e.data;
          const status = isEqual(evaluatedResult, result);
          this.props.putChangeTestStatus(this.props.kata.id, i, status);
        };

        worker.postMessage("WORK!!!");

      } catch (error) {
        console.log(error);
      }
    });
  }
  
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
          <Button onClick={() => this.runTests()} color="primary">Run tests!</Button>
        </div>
      </div>
    );
  }
}

const mapDispatch = {putChangeTestStatus, putChangeSolution};
export default connect(null, mapDispatch)(Kata);
