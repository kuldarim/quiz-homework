import * as React from 'react';
import MarkDown from './components/markdown';
import RunTestsButton from './components/run-tests-button';
import CodeEditor from './components/code-editor';
import './kata.css';
import { IKata } from '../../redux/constants/interfaces';

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
          <CodeEditor kata={kata} />
        </div>
        <div className="col-sm-2">
          <RunTestsButton kata={kata} />
        </div>
      </div>
    </div>
  );
};

export default Kata;
