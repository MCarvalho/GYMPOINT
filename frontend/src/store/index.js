import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import createStore from './createStore';

import persisReducers from './persistReducers';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persisReducers(rootReducer), middlewares);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
