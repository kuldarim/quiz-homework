import { IKata, IState } from '../../redux/reducers/reducer';
import * as React from 'react';
import { connect } from 'react-redux';
import Kata from '../kata/kata';
import KataTest from '../kata/kata-test';
import './katas-list.css';
const Carousel = require('nuka-carousel');
import User from './components/user';
import Alerts from './components/alerts';
import Submit from './components/submit';

export interface IKatasListProps {
  katas: IKata[],
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

const mapState = ({katas}: IState) => ({katas});

export default connect(mapState)(KatasList);
