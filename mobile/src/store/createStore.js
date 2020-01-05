import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhacer = __DEV__
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

  return createStore(reducers, enhacer);
};
