import * as React from 'react';
import { connect } from 'react-redux';
const { Button } = require('reactstrap');
import { putSubmit } from '../redux/reducers/reducer';
import Alerts from './alerts';

export interface ISubmitProps {
  index: number,
  katas: any[],
  user: string,
  putSubmit: (katas: any[], user: string) => any
}

type State = {
  missing: object,
};

export const Submit: React.SFC<ISubmitProps> = (props) => {
  const { index, user, katas, putSubmit } = props;

  let state: State = {
    missing: {},
  };

  const submit = () => {
    const withoutSolution = katas.filter(({solution}) => !solution);
    if (user && !withoutSolution.length) {
      state = {missing: {submit: true}};
      putSubmit(katas, user);
    } else {
      state = {
        missing: {
          user: !user,
          katas: !!withoutSolution.length,
        },
      };
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
          <Alerts missing={state.missing}/>
        </div>
      )
      : null
  );
};

const mapState = ({ katas, user }: any) => ({ katas, user });
const mapDispatch = { putSubmit };

export default connect(mapState, mapDispatch)(Submit);
