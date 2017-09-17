import React, {Component} from 'react';
import {connect} from 'react-redux';
import Kata from './kata';
import KataTest from './kata-test'

class KatasList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {
          this.props.katas && this.props.katas.map(
            (kata, i) => {
            if (!kata)
              return <div>a</div>
            return (
              <div key={`${i}-kata`}>
                <Kata kata={{...kata, id: i}}/>
                <KataTest kata={{...kata, id: i}}/>
              </div>
            )
          })
        }
      </div>
    );
  }

}
;

const mapState = ({katas}) => ({katas});
export default connect(mapState)(KatasList);
