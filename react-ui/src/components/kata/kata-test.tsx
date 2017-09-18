import * as React from 'react';
import { IKata } from '../../redux/reducers/reducer';
const { Table } = require('reactstrap');

interface IProp {
  kata: IKata;
}

class KataTest extends React.Component<IProp> {
  constructor(props: IProp) {
    super(props);
  }

  render() {

    return (
      <div>
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
    );
  }
}

export default KataTest;
