import * as React from 'react';
import { IKata } from '../../../redux/reducers/reducer';
const ReactMarkdown = require('react-remarkable');

interface IMarkDownProp {
  kata: IKata;
}

export const MarkDown: React.SFC<IMarkDownProp> = (props) => {
  const { kata } = props;

  const source = `### Task\n${kata.task}\n### Example\n${kata.example}\n\n${kata.footer}`;

  return (
    <ReactMarkdown source={source} />
  );
};

export default MarkDown;
