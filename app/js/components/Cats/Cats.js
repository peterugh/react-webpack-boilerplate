import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions'

class Cats extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.dispatch(actionCreators.getCats());
  }
  render() {
    const { cats } = this.props;
    const catImages = cats.images.map((cat) => {
      return (
        <li key={ cat } className={ styles.cat }>
          <img src={ cat }/>
        </li>
      );
    });
    return (
      <div className={ styles.Cats }>
        <h1 className={ styles.h1 }>Random Cats</h1>
        <p style={ { display: cats.fetchingCats ? 'block' : 'none' } }>
          Loading Cats
        </p>
        <ul style={ { display: cats.images.length > 0 ? 'block' : 'none' } }>
          { catImages }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cats: state.cats
  };
};

const ConnectedCats = connect(mapStateToProps)(Cats);

export default ConnectedCats;

// export default Hello;