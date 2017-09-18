import * as React from 'react';
import { connect } from 'react-redux';
import KatasList from './katas-list';
import Header from './header';

const Home = () => {
  return (
    <div>
      <Header />
      <KatasList />
    </div>
  );
};

const mapState = ({katas}: any) => ({katas});
export default connect(mapState)(Home);