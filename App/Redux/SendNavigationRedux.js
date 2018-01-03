import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sendNavigationRequest: ['data'],
  sendNavigationSuccess: ['response'],
  sendNavigationFailure: null
})

export const SendNavigationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  response: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, response: null })

// successful api lookup
export const success = (state, action) => {
  const { response } = action
  return state.merge({ fetching: false, error: null, response })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, response: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_NAVIGATION_REQUEST]: request,
  [Types.SEND_NAVIGATION_SUCCESS]: success,
  [Types.SEND_NAVIGATION_FAILURE]: failure
})
