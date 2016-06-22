import React, {PropTypes, DefaultProps} from 'react';
import styles from './styles.css';
import { connect } from 'react-redux';

class Loading extends React.Component {

  constructor(props) {
    super(props);
  }
  static PropTypes = {
    isLoading: React.PropTypes.bool.isRequired
  };
  static DefaultProps = {
    isLoading: false
  };
  render() {
    return (
      <div style={ { display: this.props.isLoading ? 'block' : 'none' } }>
        <img src='/images/loading.svg'/>
      </div>
    );
  }
}

export default Loading;