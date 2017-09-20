import * as React from 'react';
import { connect } from 'react-redux';
const { InputGroup, InputGroupAddon, Input } = require('reactstrap');
import { putUser } from '../../../redux/dispatchers/dispatchers';
import './user-name-input.css';

export interface IUserNameInputProps {
  putUser: typeof putUser
}

export const UserNameInput: React.SFC<IUserNameInputProps> = (props) => {
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
export default connect(null, mapDispatch)(UserNameInput);
