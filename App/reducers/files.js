/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The files reducer
 * @flow
 */

import {
  READ_FS_DISCOVERED,
  READ_FS_FAIL,
} from '../constants/actionTypes'

const initialState = {
  files: [],
  dir: null,
  dirFailed: null
}

const files = (state = initialState, action) => {
  switch(action.type) {
    case READ_FS_FAIL:
      return {
        ...state,
        dirFailed: action.dir,
      }
    case READ_FS_DISCOVERED:
      return {
        ...state,
        files: action.files,
        dir: action.dir,
      }
    default:
      return state
  }
}

export default files
