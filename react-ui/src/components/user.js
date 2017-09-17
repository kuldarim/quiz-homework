import React, {Component} from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import { putUser } from '../redux/reducers/reducer'
import './user.css';

class User extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.putUser(event.target.value);
  }

  render() {
    return (
      <InputGroup>
      <InputGroupAddon>Enter user name: </InputGroupAddon>
      <Input onChange={this.onChange}/>
      </InputGroup>
    )
  }
}

const mapState = ({user}) => ({user});
const mapDispatch = {putUser};
export default connect(mapState, mapDispatch)(User);
