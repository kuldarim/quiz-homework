import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { putSubmit } from '../redux/reducers/reducer';
import Alerts from './alerts';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missing: {}
    }
  }

  submit() {
    const withoutSolution = this.props.katas.filter(({solution}) => !solution);
    if (this.props.user && !withoutSolution.length) {
      this.setState({missing: {submit: true}});
      this.props.putSubmit(this.props.katas, this.props.user)
    } else {
      
      this.setState({
        missing: {
          user: !this.props.user,
          katas: !!withoutSolution.length
        }
      })
    }
  }

  render() {
    return (
      this.props.index === this.props.katas.length - 1
        ? <div>
            <Button 
              onClick={() => this.submit()} 
              color="primary"
            >Submit</Button>
            <Alerts missing={this.state.missing}/>
          </div> 
        : null       
    );
  }

};

const mapState = ({ katas, user }) => ({ katas, user });
const mapDispatch = { putSubmit };

export default connect(mapState, mapDispatch)(Submit);
