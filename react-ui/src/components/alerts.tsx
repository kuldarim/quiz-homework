import * as React from 'react';
const { Alert } = require('reactstrap');

export interface IAlertsProps {
  missing: any;
}

export const Alerts: React.SFC<IAlertsProps> = (props) => {
  const { missing } = props;
  const user = missing.user
  ? (
      <Alert color="danger">
        <strong>Opps!</strong> Forgot to enter userId.
      </Alert>
    )
  : null;
  const kata = missing.katas
    ? (
        <Alert color="danger">
          <strong>Opps!</strong> Forgot to solve one of the katas.
        </Alert>
      )
    : null;
  const wellDone = missing.submit
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

export default Alerts;
