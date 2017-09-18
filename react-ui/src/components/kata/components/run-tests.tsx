import * as React from 'react';
import { connect } from 'react-redux';
import { IKata, putAlerts, putChangeTestStatus } from '../../../redux/reducers/reducer';
const { Button } = require ('reactstrap');
import worker from '../../../utils/worker';

export interface IRunTestsProps {
  kata: IKata;
  putChangeTestStatus: typeof putChangeTestStatus;
  putAlerts: typeof putAlerts;
}

export const RunTests: React.SFC<IRunTestsProps> = (props) => {
  const { kata, putAlerts, putChangeTestStatus } = props;

  const runTests = () => { kata.tests.forEach(({param, result}, i: number) =>
    worker({
      solution: kata.solution,
      param,
      result,
      putAlerts,
      callback: (status: boolean) => putChangeTestStatus(kata.id, i, status),
    }));
  };

  return (
    <Button onClick={runTests} color="primary">Run tests!</Button>
  );
};

const mapDispatch = {putChangeTestStatus, putAlerts};
export default connect(null, mapDispatch)(RunTests);
