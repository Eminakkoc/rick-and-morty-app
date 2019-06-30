
import { createStore } from 'redux';
import characterReducer from 'state/reducers/characterReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

class ReduxStore {
  constructor() {
    this.store = createStore(
      characterReducer,
      composeWithDevTools(),
    );
  }
}

export default new ReduxStore();
