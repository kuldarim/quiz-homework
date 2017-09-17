import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putChangeTestStatus } from '../redux/reducers/reducer';
import { Button } from 'reactstrap';
import { worker } from '../utils/worker';

class RunTests extends Component {
  runTests() {
    // return params[0].filter(p => ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].indexOf(p) === -1)
    this.props.kata.tests.forEach(({param, result}, i) => {
        worker(
          this.props.kata.solution,
          param,
          result,
          (status) => this.props.putChangeTestStatus(this.props.kata.id, i, status)
        )
    });
  }
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Button onClick={() => this.runTests()} color="primary">Run tests!</Button>
    );
  }
}

const mapDispatch = {putChangeTestStatus};
export default connect(null, mapDispatch)(RunTests);
