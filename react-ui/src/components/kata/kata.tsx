import { IKata } from '../../redux/reducers/reducer';
import * as React from 'react';

import MarkDown from './components/markdown';
import RunTests from './components/run-tests';
import Editor from './components/editor';
import './kata.css';

export interface IKataProps {
  kata: IKata
}

export const Kata: React.SFC<IKataProps> = (props) => {
  const { kata } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <MarkDown kata={kata} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10">
          <Editor kata={kata} />
        </div>
        <div className="col-sm-2">
          <RunTests kata={kata} />
        </div>
      </div>
    </div>
  );
};

export default Kata;
