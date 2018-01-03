import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { ToggleSideNavTypes } from '../Redux/ToggleSideNavRedux'
import { SendNavigationTypes } from '../Redux/SendNavigationRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getToggleSideNav } from './ToggleSideNavSagas'
import { getSendNavigation } from './SendNavigationSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    takeLatest(ToggleSideNavTypes.TOGGLE_SIDE_NAV_REQUEST, getToggleSideNav),
    takeLatest(SendNavigationTypes.SEND_NAVIGATION_REQUEST, getSendNavigation),
  ])
}
