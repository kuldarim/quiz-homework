import * as React from 'react';
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
            <div className="container">
              <div className="row table-header">
                <div className="col-sm-8">Input</div>
                <div className="col-sm-4">Passed</div>
              </div>
              {
                this.props.kata.tests && this.props.kata.tests.map((test, i: number) => {
                  return (
                    <div className="row table-row" key={`${i}-test`}>
                      <div className="col-sm-8">{test.param.toString()}</div>
                      <div className="col-sm-4">{test.status ? 'Passed' : 'Failed'}</div>
                    </div>
                  );
                })
              }
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default KataTestResultsDisplayer;
