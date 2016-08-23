import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import DevTools from '../containers/DevTools'
import rootSagas from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
)

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers'))
    )
  }

  sagaMiddleware.run(rootSagas)

  return store
}

export default configureStore
