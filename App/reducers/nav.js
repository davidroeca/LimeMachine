/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The navigation reducer
 * @flow
 */

import AppNavigator from '../components/AppNavigator'
import { HOME } from '../constants/navigation'

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(HOME)
)

const nav = (state: Object = initialState, action: Object) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}

export default nav
