import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Map as map } from 'immutable';
import reducer from '../reducers/index'
import Home from '../pages/containers/home'
import thunk from 'redux-thunk'

const app = document.getElementById('app')

function logger ({getState, dispatch}) {
  return (next) => {
    return (action) => {
      console.log('Vamos a enviar esta accion', action)
      //console.log('este es mi estado anterior', getState().toJS())
      const value = next(action)
      console.log('este es mi nuevo estado', getState().toJS())
      return value
    }
  }
}

const store = createStore(
  reducer,
  map(),
  applyMiddleware(logger, thunk)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

render(
  <Provider store={store}>
    <Home/>
  </Provider>,
    app
  )
