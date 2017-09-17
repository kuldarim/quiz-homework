import React, {Component} from 'react';
import {connect} from 'react-redux';
import Kata from './kata';

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
              <Kata key={i} kata={{...kata, id: i}}/>
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
