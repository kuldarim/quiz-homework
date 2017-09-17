import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import Home from './home';
import { getAllKatas } from '../redux/reducers/reducer';

const Routes = ({getAllKatas}) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} onEnter={getAllKatas} />
    </Router>
  )
};

const mapState = ({katas}) => ({katas});
const mapDispatch = {getAllKatas};

export default connect(mapState, mapDispatch)(Routes);
