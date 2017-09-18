import * as React from 'react';
import { connect } from 'react-redux';
import { putChangeTestStatus } from '../redux/reducers/reducer';
const { Button } = require ('reactstrap');
import { worker } from '../utils/worker';

export interface ITest {
  param: string;
  result: string;
}

export interface IRunTestsProps {
  kata: any;
  putChangeTestStatus: (id: number, i: number, status: boolean) => any;
}

export const RunTests: React.SFC<IRunTestsProps> = (props) => {
  const { kata, putChangeTestStatus } = props;

  const runTests = () => { (kata.tests as ITest[]).forEach(({param, result}, i: number) =>
    worker(
      kata.solution,
      param,
      result,
      (status: boolean) => putChangeTestStatus(kata.id, i, status),
    ));
  };

  return (
    <Button onClick={runTests} color="primary">Run tests!</Button>
  );
};

const mapDispatch = {putChangeTestStatus};
export default connect(null, mapDispatch)(RunTests);
