import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSagas from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()

const finalCreateStore = compose(
  applyMiddleware(sagaMiddleware)
)(createStore)

const configureStore = (initialState) => {
  const store = finalCreateStore(rootReducer, initialState)
  sagaMiddleware.run(rootSagas)
  return store
}

export default configureStore
