import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

class Hello extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={ styles.Hello }>
        <h1 className={ styles.HelloH1 }>Hello World</h1>
        <img src='/images/webpack.png' alt='webpack logo' width='300'/>
        <img src='/images/react.png' alt='react logo' width='200'/>
        <img src='/images/gulp.png' alt='gulp logo' width='175'/>
      </div>
    );
  }
}

export default Hello;