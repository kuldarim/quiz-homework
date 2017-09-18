import * as React from 'react';
const { Table } = require('reactstrap');

interface ITest {
  param: string;
  status: boolean;
}

interface IKata {
  tests: ITest[];
}

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
                (this.props as IProp).kata.tests && (this.props as IProp).kata.tests.map(
                (test: ITest, i: number) => {
                return (
                  <tr key={`${i}-test`}>
                    <td>{test.param}</td>
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
