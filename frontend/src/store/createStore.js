import { compose, applyMiddleware, createStore } from 'redux';

export default (reducers, middlewares) => {
  const enhacer =
    process.env.NODE_ENV === 'development'
      ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
      : compose(applyMiddleware(...middlewares));

  return createStore(reducers, enhacer);
};
