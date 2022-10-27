import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import shoppingReducer from '../store/reducers/shopping';
import { watchProducts } from '../store/sagas';

  let composeEnhancers = compose;


  const appReducer = combineReducers({
    /* app’s top-level reducers */
    shopping: shoppingReducer,
  });

  const rootReducer = (state, action) => {
    if (action.type === 'REINITIALIZE_STATE') {
      state = undefined;
    }
    return appReducer(state, action);
  };

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  // saga watchers
  sagaMiddleware.run(watchProducts);

  export default store;