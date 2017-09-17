import React, { Component } from 'react';
import { Table } from 'reactstrap';

class KataTest extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <Table>
        <thead>
          <tr>
            <th>Input</th>
            <th>Passed</th>
          </tr>
        </thead>
        <tbody>
            {
            this.props.kata.tests && this.props.kata.tests.map(
              (test, i) => {
              return (
                <tr key={`${i}-test`}>
                  <td>{test.param}</td>
                  <td>{test.status ? 'true': 'false'}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    );
  }
}

export default KataTest;
