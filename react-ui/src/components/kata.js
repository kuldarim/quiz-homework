import React, { Component } from 'react';

import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

function onChange(newValue) {
  console.log('change',newValue);
}

class Kata extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log('@props', this.props);
    return (
      <div>
        <div>{this.props.description}</div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={onChange}
          name={`${this.props.id}`}
          editorProps={{$blockScrolling: true}}
        />
      </div>
    );
  }
}

export default Kata;
