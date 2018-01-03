import { call, put } from 'redux-saga/effects'
import SendNavigationActions from '../Redux/SendNavigationRedux'

export function * getSendNavigation (action) {
  const { data } = action

  if (data) {
    yield put(SendNavigationActions.sendNavigationSuccess(data))
  } else {
    yield put(SendNavigationActions.sendNavigationFailure())
  }
}
