import { Map as map } from 'immutable'
import { SHOW_FORM } from '../action-types/index'

const initialState = map({
  active: false
})

const formVisible = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return state.set('active', action.payload.value)
    default:
      return state
  }
}

export default formVisible
