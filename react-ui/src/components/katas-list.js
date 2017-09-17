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
            ({description, tests}, i) => {
            if (!description)
              return <div>a</div>
            return (
              <Kata key={i} id={i} description={description} tests={tests}/>
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
