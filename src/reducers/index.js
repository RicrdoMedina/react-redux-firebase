import form from './form'
import spinner from './spinner'
import data from './users'
import search from './search'

import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
  form,
  data,
  spinner,
  search
})

export default rootReducer
