import React, {Component} from 'react';
import {connect} from 'react-redux';
import Kata from './kata';
import KataTest from './kata-test';
import User from './user';
import './katas-list.css';

import Carousel from 'nuka-carousel';

class KatasList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="kata-container">
        <div className="kata-header">
          <User/>
          <div> You need to solve the excercizes bellow</div>
        </div>
        <Carousel>
          {
            this.props.katas && this.props.katas.map(
              (kata, i) => {
              return (
                <div key={`${i}-kata`} className="kata" >
                  <Kata kata={{...kata, id: i}}/>
                  <KataTest kata={{...kata, id: i}}/>
                </div>
              )
            })
          }
        </Carousel>
        
      </div>
    );
  }

};

const mapState = ({katas}) => ({katas});
export default connect(mapState)(KatasList);
