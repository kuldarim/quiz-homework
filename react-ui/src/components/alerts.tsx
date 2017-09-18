import * as React from 'react';
import { connect } from 'react-redux';
const { Alert } = require('reactstrap');

export interface IAlertsProps {
  alerts: any;
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
  const wellDone = alerts.submit
    ? (
        <Alert color="success">
          <strong>Well done!</strong> You successfully submitted your answers.
        </Alert>
      )
    : null;
  return (

    <div>
      {user}
      {kata}
      {wellDone}
    </div>
  );
};

const mapState = ({ alerts }: any) => ({ alerts });

export default connect(mapState)(Alerts);
