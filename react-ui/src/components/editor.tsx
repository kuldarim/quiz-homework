import * as React from 'react';
import { connect } from 'react-redux';

import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import { putChangeSolution, IKata } from '../redux/reducers/reducer';

export interface IEditorProps {
  kata: IKata;
  putChangeSolution: typeof putChangeSolution;
}

export const Editor: React.SFC<IEditorProps> = (props) => {
  const { kata, putChangeSolution } = props;

  const handleIncrement = (newValue: string) => { putChangeSolution(kata.id, newValue); };

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      name={`${kata.id}`}
      onChange={handleIncrement}
      value={kata.solution}
      setOptions={{
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

const mapDispatch = { putChangeSolution };
export default connect(null, mapDispatch)(Editor);
