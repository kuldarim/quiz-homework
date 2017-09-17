import React, { Component } from 'react';

class KataTest extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <div>
        {
          this.props.kata.tests && this.props.kata.tests.map(
            (test, i) => {
            return (
              <div key={`${i}-test`}>
                <span>{test.param}</span>
                <span>{test.status ? 'true': 'false'}</span>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default KataTest;
