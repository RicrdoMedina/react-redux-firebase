import _ from 'lodash'
import { LOAD_USERS_SUCCESS } from '../action-types/index'

const initialState = {
  users: [],
}

export default (state = initialState, action) => {
  let newState = _.merge({}, state)
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      console.log(action.payload.users);
      newState.users = action.payload.users
      console.log("newState", newState)
      return newState
    default:
      return state
  }
}
