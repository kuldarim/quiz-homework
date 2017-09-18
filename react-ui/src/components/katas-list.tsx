import * as React from 'react';
import { connect } from 'react-redux';
import Kata from './kata';
import KataTest from './kata-test';
import User from './user';
import './katas-list.css';
import Submit from './submit';
const Carousel = require('nuka-carousel');
import Alerts from './alerts';

export interface IKatasListProps {
  katas: any[],
}

export const KatasList: React.SFC<IKatasListProps> = (props) => {
  const { katas } = props;

  return (
    <div className="kata-container">
        <div className="kata-header">
          <User/>
          <div> You need to solve the excercizes bellow</div>
        </div>
        <Alerts />
        <Carousel>
          {
            katas && katas.map(
              (kata, i) => {
                return (
                  <div key={`${i}-kata`} className="kata" >
                    <Kata kata={{...kata, id: i}}/>
                    <KataTest kata={{...kata, id: i}}/>
                    <Submit index={i}/>
                  </div>
                );
            })
          }
        </Carousel>
      </div>
  );
};

const mapState = ({katas}: any) => ({katas});

export default connect(mapState)(KatasList);
