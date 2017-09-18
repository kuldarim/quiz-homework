import * as React from 'react';
import { connect } from 'react-redux';
import KatasList from './katas-list';
import Header from './header';
import { IState } from '../redux/reducers/reducer';

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
