import * as React from 'react';
import { connect } from 'react-redux';
import { IKata, putAlerts, putChangeTestStatus } from '../../../redux/reducers/reducer';
const { Button } = require ('reactstrap');
import worker from '../../../utils/worker';

export interface IRunTestsButtonProps {
  kata: IKata;
  putChangeTestStatus: typeof putChangeTestStatus;
  putAlerts: typeof putAlerts;
}

export const RunTestsButton: React.SFC<IRunTestsButtonProps> = (props) => {
  const { kata, putAlerts, putChangeTestStatus } = props;

  const runTests = () => kata.tests.forEach(({param, result}, testId: number) =>
    worker({solution: kata.solution, param, result, kataId: kata.id, testId})
      .then(({kataId, testId, status}) => {
        putChangeTestStatus(kataId, testId, status);
        putAlerts({});
      })
      .catch(() => putAlerts({tests: true})),
  );

  return (
    <Button onClick={runTests} color="primary">Run tests!</Button>
  );
};

const mapDispatch = {putChangeTestStatus, putAlerts};
export default connect(null, mapDispatch)(RunTestsButton);
