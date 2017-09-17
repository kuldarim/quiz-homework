import React, {Component} from 'react';
import { connect } from 'react-redux';

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
      <div className="user-container">
        <span>Enter user name: </span>
        <input onChange={this.onChange}></input>
      </div>
    )
  }
}

const mapState = ({user}) => ({user});
const mapDispatch = {putUser};
export default connect(mapState, mapDispatch)(User);
