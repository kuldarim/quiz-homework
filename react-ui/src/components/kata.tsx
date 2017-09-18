import * as React from 'react';

import MarkDown from './markdown';
import RunTests from './run-tests';
import Editor from './editor';
import './kata.css';

export interface IKataProps {
  kata: any
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
