import React, { Component } from 'react';
import { connect } from 'react-redux';

import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import { putChangeTestStatus } from '../redux/reducers/reducer';

import isEqual from 'lodash/isEqual';

class Kata extends Component {
  runTests() {
    this.props.kata.tests.forEach(({param, result}, i) => {
      try {
        // return params[0].filter(p => ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].indexOf(p) === -1)
        const evaluatedResult = eval(`((...params) => {${this.state.solution}})(${JSON.stringify(param)})`);
        // const result = eval(`((...params) => {${newValue}})(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])`);
        const status = isEqual(evaluatedResult, result);
        this.props.putChangeTestStatus(this.props.kata.id, i, status);
      } catch (error) {
        console.log(error);
      }
    });
  }
  
  onChange(newValue) {
    this.state.solution = newValue;
  }
  
  //   // console.log('@props', this.props);
  //   const response = `
  //   self.onmessage=function(){
  //       postMessage(
  //           eval((${newValue})())
  //       )
  //      self.close()
  
  //     }
  //   `; // Wrap workers onmessage lambda
  
  //   const runnable = new Blob([response], { type: "text/javascript" }); // Make a runnable JS blob
  
  //   const worker = new Worker(window.URL.createObjectURL(runnable)); // Bind the runnable blob to the a URL and create a worker
  
  //   worker.onmessage = (e) => {
  //     console.log("Received: " + e.data); // Log the response from the worker
  //   };
  
  //   worker.postMessage("WORK!!!"); // Start the worker.
  
  constructor(props) {
    super(props);
    this.state = {
      solution: () => {}
    };
    this.onChange = this.onChange.bind(this);
  }
  
  render() {
    
    return (
      <div>
        <div>{this.props.kata.description}</div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          name={`${this.props.kata.id}`}
          onChange={this.onChange}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <button onClick={() => this.runTests()}>test</button>
      </div>
    );
  }
}

const mapDispatch = {putChangeTestStatus};
export default connect(null, mapDispatch)(Kata);
