import { Map as map } from 'immutable'
import { SHOW_SPINNER} from '../action-types/index'

const initialState = map({
  active: false
})

function spinner (state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return state.set('active', action.payload.value)
    default:
      return state
  }
}

export default spinner
