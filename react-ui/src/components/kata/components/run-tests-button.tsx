import * as React from 'react';
import { connect } from 'react-redux';
const { Button } = require ('reactstrap');
import worker from '../../../utils/worker';
import { IKata } from '../../../redux/constants/interfaces';
import { putChangeTestStatus, putAlerts } from '../../../redux/dispatchers/dispatchers';

export interface IRunTestsButtonProps {
  kata: IKata;
  putChangeTestStatus: typeof putChangeTestStatus;
  putAlerts: typeof putAlerts;
}

export const RunTestsButton: React.SFC<IRunTestsButtonProps> = (props) => {
  const { kata, putAlerts, putChangeTestStatus } = props;

  const runTests = () => kata.tests.forEach(({param, result}, testId: number) => {
    if (!kata.solution) {
      putAlerts({katas: true});
    } else {
      worker({solution: kata.solution, param, result, kataId: kata.id, testId})
        .then(({kataId, testId, status}) => {
          putChangeTestStatus(kataId, testId, status);
          putAlerts({});
        })
        .catch(() => putAlerts({tests: true}));
    }
  });

  return (
    <Button onClick={runTests} color="primary">Run tests!</Button>
  );
};

const mapDispatch = {putChangeTestStatus, putAlerts};
export default connect(null, mapDispatch)(RunTestsButton);
