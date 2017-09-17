import React from 'react';
import { Alert } from 'reactstrap';

const Alerts = (props) => {
  const user = props.missing.user 
    ? <Alert color="danger">
        <strong>Opps!</strong> Forgot to enter userId.
      </Alert>
    : null;
  const kata = props.missing.katas 
    ? <Alert color="danger">
        <strong>Opps!</strong> Forgot to solve one of the katas.
      </Alert>
    : null;
  const wellDone = props.missing.submit
    ? <Alert color="success">
        <strong>Well done!</strong> You successfully submitted your answers.
      </Alert>
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
