import globalCss from './css/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './js/components/Hello/Hello';
import Cats from './js/components/Cats/Cats';
import appStore from './js/stores/appStore';
import { setNameActionCreator, addItemActionCreator } from './js/actions/actions';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    appStore.dispatch(setNameActionCreator('Example User'));
  }
  render() {
    return (
      <Provider store={ appStore }>
        <div>
          <Hello/>
          <Cats/>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('App'));