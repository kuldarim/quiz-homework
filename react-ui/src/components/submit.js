import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { putSubmit } from '../redux/reducers/reducer';

class Submit extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      this.props.index === this.props.katas.length - 1
        ? <Button 
            onClick={() => this.props.putSubmit(this.props.katas, this.props.user)} 
            color="primary"
          >Submit</Button> 
        : null       
    );
  }

};

const mapState = ({ katas, user }) => ({ katas, user });
const mapDispatch = { putSubmit };

export default connect(mapState, mapDispatch)(Submit);
