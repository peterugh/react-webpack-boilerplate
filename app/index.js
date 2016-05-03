import globalCss from './css/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './js/components/Hello/Hello';
import appStore from './js/stores/appStore';
import { setNameActionCreator, addItemActionCreator } from './js/actions/actions';
import { Provider } from 'react-redux';


console.clear();
console.log('appStore state after initialization:', appStore.getState());

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    appStore.dispatch(setNameActionCreator('Example User'));
    return (
      <Provider store={ appStore }>
        <Hello/>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('App'));