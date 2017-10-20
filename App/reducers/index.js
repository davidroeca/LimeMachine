/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The top-level reducer
 * @flow
 */

import { combineReducers } from 'redux'
import nav from './nav'
import files from './files'

const reducer = combineReducers({
  nav,
  files,
})

export default reducer
