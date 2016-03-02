import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Hello from './js/components/Hello/Hello';
import globalCss from './css/global.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Hello/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('App'));