import { fromJS } from 'immutable'
import { SEARCH_ENTITIES } from '../action-types/index'

const initialState = fromJS({
  value: ''
})

function data (state = initialState, action) {
  switch (action.type) {
    case SEARCH_ENTITIES: {
      return state.set('value', action.payload.query)
    }

    default:
      return state
  }
}

export default data;
