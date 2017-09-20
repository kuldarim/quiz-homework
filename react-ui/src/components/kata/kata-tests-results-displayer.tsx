import * as React from 'react';
const { Table } = require('reactstrap');
import './kata-tests-results-displayer.css';
import { IKata } from '../../redux/constants/interfaces';

interface IProp {
  kata: IKata;
}

class KataTestResultsDisplayer extends React.Component<IProp> {
  constructor(props: IProp) {
    super(props);
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>Test results:</h3>
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
                    (test, i: number) => {
                    return (
                      <tr key={`${i}-test`}>
                        <td>{test.param.toString()}</td>
                        <td>{test.status ? 'true' : 'false'}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default KataTestResultsDisplayer;
