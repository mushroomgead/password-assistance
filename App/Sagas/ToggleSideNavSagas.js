import { call, put } from 'redux-saga/effects'
import ToggleSideNavActions from '../Redux/ToggleSideNavRedux'

export function * getToggleSideNav ({toggleMode}) {
  if (toggleMode) {
    yield put(ToggleSideNavActions.toggleSideNavSuccess(toggleMode))
  } else {
    yield put(ToggleSideNavActions.toggleSideNavFailure())
  }
}
