import * as React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import Home from './home';
import { getAllKatas } from '../redux/dispatchers/dispatchers';

export interface IRoutesProps {
  getAllKatas: () => any,
}

export const Routes: React.SFC<IRoutesProps> = (props) => {
  const { getAllKatas } = props;

  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} onEnter={getAllKatas} />
    </Router>
  );
};

const mapState = ({katas}: any) => ({katas});
const mapDispatch = {getAllKatas};

export default connect(mapState, mapDispatch)(Routes);
