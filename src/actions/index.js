import { getUsersDB, addUser } from '../services/firebase'
import {
  SHOW_FORM,
  SHOW_SPINNER,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILED,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  SEARCH_ENTITIES
}
from '../action-types/index'

export const showForm = (value) => {
  return {
    type: SHOW_FORM,
    payload: {
      value
    }
  }
}

export const showSpinner = (value) => {
  return {
    type: SHOW_SPINNER,
    payload: {
      value
    }
  }
}

export const loadUsers = () => {
	return dispatch => {
		dispatch({
			type: LOAD_USERS_REQUEST
    })
    dispatch(showSpinner(true))
    getUsersDB()
      .then(users => {
        dispatch({
          type: LOAD_USERS_SUCCESS,
          payload: users.val()
        })
        dispatch(showSpinner(false))
      })
      .catch(error => {
        dispatch({
          type: LOAD_USERS_FAILED,
          payload: error
        })
        dispatch(showSpinner(false))
      })
	}
}

export const createUser = (user) => {
	return dispatch => {
		dispatch({
			type: ADD_USER_REQUEST
    })
		addUser(user)
			.then(res => {
        loadUsers()(dispatch)
				dispatch({
					type: ADD_USER_SUCCESS
				})
			})
			.catch(error => {
				dispatch({
					type: ADD_USER_FAILED,
					payload: error
				})
			})
	}
}

export const searchEntities = (query) => {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}