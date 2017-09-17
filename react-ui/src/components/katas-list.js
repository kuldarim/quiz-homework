import React, {Component} from 'react';
import {connect} from 'react-redux';
import Kata from './kata';
import KataTest from './kata-test';
import User from './user';
import { Button } from 'reactstrap';
import { putSubmit } from '../redux/reducers/reducer';
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
                const submit = i === this.props.katas.length - 1 
                ? <Button onClick={() => this.props.putSubmit(this.props.katas, this.props.user)} color="primary">Submit</Button> 
                : '';
                return (
                  <div key={`${i}-kata`} className="kata" >
                    <Kata kata={{...kata, id: i}}/>
                    <KataTest kata={{...kata, id: i}}/>
                    {submit}
                  </div>
                )
            })
          }
        </Carousel>
        
      </div>
    );
  }

};

const mapState = ({katas, user}) => ({katas, user});
const mapDispatch = {putSubmit};

export default connect(mapState, mapDispatch)(KatasList);
