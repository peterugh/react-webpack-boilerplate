import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

class Hello extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className={ styles.HelloH1 }>Hello World</h1>
      </div>
    );
  }
}

export default Hello;