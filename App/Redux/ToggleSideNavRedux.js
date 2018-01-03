import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  toggleSideNavRequest: ['toggleMode'],
  toggleSideNavSuccess: ['response'],
  toggleSideNavFailure: null
})

export const ToggleSideNavTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  toggleMode: null,
  fetching: null,
  response: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the toggleMode from an api
export const request = (state, { toggleMode }) =>
  state.merge({ fetching: true, toggleMode, response: null })

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
  [Types.TOGGLE_SIDE_NAV_REQUEST]: request,
  [Types.TOGGLE_SIDE_NAV_SUCCESS]: success,
  [Types.TOGGLE_SIDE_NAV_FAILURE]: failure
})
