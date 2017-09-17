import React, {Component} from 'react';
import { connect } from 'react-redux';
import KatasList from './katas-list';
import Header from './header';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <KatasList />
      </div>
    )
  }
}

const mapState = ({katas}) => ({katas});
export default connect(mapState)(Home);
