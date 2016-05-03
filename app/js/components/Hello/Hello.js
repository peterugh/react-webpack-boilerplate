import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions'

class Hello extends React.Component {

  constructor(props) {
    super(props);
  }
  updateName = (evt) => {
    this.props.dispatch(actionCreators.setNameActionCreator(evt.target.value))
  };
  addToDo = () => {
    this.props.dispatch(actionCreators.addItemActionCreator(this.refs.toDoInput.value));
    this.refs.toDoInput.value = '';
  };
  removeToDoItem = (item) => {
    this.props.dispatch(actionCreators.removeItemActionCreator(item));
  };
  componentDidMount = () => {
    this.props.dispatch(actionCreators.addItemActionCreator('Learn Redux'));
  }
  render() {

    var { user, items } = this.props;

    const toDoListDisplay = [];

    items.map((item, i) => {
      toDoListDisplay.push(
        <li key={ i } className={ styles.li }>
          { item } <button onClick={ this.removeToDoItem.bind(this, item) }>Remove This Item</button>
        </li>);
    })

    return (
      <div className={ styles.Hello }>
        <h1 className={ styles.h1 }>Hello { user.name }</h1>
        <h3 className={ styles.h3 } style={ { display: ( items.length > 0 ? 'block' : 'none' ) } }>
          To Do List:
        </h3>
        <ul className={ styles.ul } style={ { display: ( items.length > 0 ? 'block' : 'none' ) } }>
          { toDoListDisplay }
        </ul>
        <div className={ styles.inputs }>
          <label className={ styles.label }>
            Set New Name<br/>
            <input type='text' onChange={ this.updateName } className={ styles.textInput } placeholder='Enter your name' />
          </label>
          <label className={ styles.label }>
            Add a To Do Item<br/>
            <input type='text' ref='toDoInput' className={ styles.textInput } placeholder='Task Name'/>
          </label>
        </div>
        <div className={ styles.submits }>
          <button onClick={ this.addToDo } className={ styles.button }>Add To Do Item</button>
        </div>

        <img src='/images/webpack.png' alt='webpack logo' width='300'/>
        <img src='/images/react.png' alt='react logo' width='200'/>
        <img src='/images/gulp.png' alt='gulp logo' width='175'/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    items: state.items
  };
};

const ConnectedHello = connect(mapStateToProps)(Hello);

export default ConnectedHello;

// export default Hello;