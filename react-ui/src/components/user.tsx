import * as React from 'react';
import { connect } from 'react-redux';
const { InputGroup, InputGroupAddon, Input } = require('reactstrap');

import { putUser } from '../redux/reducers/reducer';
import './user.css';

export interface IUserProps {
  putUser: (s: string) => any
}

export const User: React.SFC<IUserProps> = (props) => {
  const { putUser } = props;

  const handleIncrement = (event: any) => { putUser(event.target.value); };

  return (
    <InputGroup>
        <InputGroupAddon>Enter user name: </InputGroupAddon>
        <Input onChange={handleIncrement}/>
      </InputGroup>
  );
};

const mapDispatch = { putUser };
export default connect(null, mapDispatch)(User);
