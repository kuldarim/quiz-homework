import * as React from 'react';
import { connect } from 'react-redux';
const { Button } = require('reactstrap');
import { IKata, putAlerts, putSubmit, IAlert, IState } from '../../../redux/reducers/reducer';

export interface ISubmitProps {
  index: number,
  katas: IKata[],
  user: string,
  alerts: IAlert,
  putSubmit: typeof putSubmit,
  putAlerts: typeof putAlerts,
}

export const Submit: React.SFC<ISubmitProps> = (props) => {
  const { index, user, katas, putSubmit, putAlerts, alerts } = props;

  const submit = () => {
    const withoutSolution = katas.filter(({solution}) => !solution);
    if (user && !withoutSolution.length && !alerts.tests) {
      putSubmit(katas, user);
    } else {
      putAlerts({
        user: !user,
        katas: !!withoutSolution.length,
      });
    }
  };

  return (
    index === katas.length - 1
      ? (
        <div>
          <Button
            onClick={submit}
            color="primary"
          >
            Submit
          </Button>
        </div>
      )
      : null
  );
};

const mapState = ({ katas, user, alerts }: IState) => ({ katas, user, alerts });
const mapDispatch = { putSubmit, putAlerts };

export default connect(mapState, mapDispatch)(Submit);
