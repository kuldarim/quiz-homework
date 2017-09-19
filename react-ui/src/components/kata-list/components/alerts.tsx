import * as React from 'react';
import { connect } from 'react-redux';
import { IAlert, IState } from '../../../redux/reducers/reducer';
const { Alert } = require('reactstrap');

export interface IAlertsProps {
  alerts: IAlert;
}

export const Alerts: React.SFC<IAlertsProps> = (props) => {
  const { alerts } = props;
  const user = alerts.user
  ? (
      <Alert color="danger">
        <strong>Opps!</strong> Forgot to enter userId.
      </Alert>
    )
  : null;
  const kata = alerts.katas
    ? (
        <Alert color="danger">
          <strong>Opps!</strong> Forgot to solve one of the katas.
        </Alert>
      )
    : null;
  const tests = alerts.tests
    ? (
        <Alert color="danger">
          <strong>Opps!</strong> Something is wrong with one of your solutions, check console.
        </Alert>
      )
    : null;

  const wellDone = (alerts.submit || []).length
    ? (
        <Alert color="success">
          <strong>Well done!</strong> You successfully submitted your answers.
          Tests passed: {(alerts.submit || []).filter(Boolean).length} of {(alerts.submit || []).length}
        </Alert>
      )
    : null;
  return (
    <div>
      {user}
      {kata}
      {wellDone}
      {tests}
    </div>
  );
};

const mapState = ({ alerts }: IState) => ({ alerts });

export default connect(mapState)(Alerts);
