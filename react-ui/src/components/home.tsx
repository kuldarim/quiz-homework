import * as React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import KatasList from './kata-list/katas-list';
import { IState } from '../redux/constants/interfaces';

const Home = () => {
  return (
    <div>
      <Header />
      <KatasList />
    </div>
  );
};

const mapState = ({katas}: IState) => ({katas});
export default connect(mapState)(Home);
