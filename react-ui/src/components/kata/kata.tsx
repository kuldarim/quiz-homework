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
    <div>
        <MarkDown kata={kata} />
        <div className="editor-container">
          <Editor kata={kata} />
          <RunTests kata={kata} />
        </div>
      </div>
  );
};

export default Kata;
