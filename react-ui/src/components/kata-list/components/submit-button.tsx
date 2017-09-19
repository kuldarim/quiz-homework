import * as React from 'react';
import { connect } from 'react-redux';
const { Button } = require('reactstrap');
import { IKata, putAlerts, putSubmit, IState } from '../../../redux/reducers/reducer';

export interface ISubmitButtonProps {
  index: number,
  katas: IKata[],
  user: string,
  putSubmit: typeof putSubmit,
  putAlerts: typeof putAlerts,
}

export const SubmitButton: React.SFC<ISubmitButtonProps> = (props) => {
  const { index, user, katas, putSubmit, putAlerts } = props;

  const submit = () => {
    const withoutSolution = katas.filter(({solution}) => !solution);
    if (user && !withoutSolution.length) {
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
        <div className="container">
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

const mapState = ({ katas, user }: IState) => ({ katas, user });
const mapDispatch = { putSubmit, putAlerts };

export default connect(mapState, mapDispatch)(SubmitButton);
