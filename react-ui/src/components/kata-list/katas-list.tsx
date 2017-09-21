import * as React from 'react';
import { connect } from 'react-redux';
import Kata from '../kata/kata';
import KataTestsResultsDisplayer from '../kata/kata-tests-results-displayer';
import UserNameInput from './components/user-name-input';
import SubmitButton from './components/submit-button';
import Alerts from './components/alerts';
const Carousel = require('nuka-carousel');
import { IKata, IState } from '../../redux/constants/interfaces';
import './katas-list.css';

export interface IKatasListProps {
  katas: IKata[],
}

export const KatasList: React.SFC<IKatasListProps> = (props) => {
  const { katas } = props;

  return (
    <div>
        <div className="kata-header">
          <UserNameInput/>
          <i className="container">
            You need to solve 4 Katas bellow, don't forget to enter user name before submitting.
            Each Kata has several test cases, feal free to run them any times you want, it doesn`t
            impact your final result. If test fails it you will get it marked as false. In case of
            error in your code check console, you will see the error message output.
          </i>
          <i className="container">
            You can access params with params. Try console.log(params). Basically you need to modify
            this object to get desired output.
          </i>
        </div>
        <Alerts />
        <Carousel slideWidth={1} initialSlideHeight={800} margin={'auto'} dragging={false} swiping={false}>
          {
            katas && katas.map((kata, i) => {
              return (
                <div key={`${i}-kata`}>
                  <Kata kata={{...kata, id: i}}/>
                  <KataTestsResultsDisplayer kata={{...kata, id: i}}/>
                  <SubmitButton index={i}/>
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
