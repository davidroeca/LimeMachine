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
  TOGGLE_SELECT,
  IMPORT_SONGS_SUCCESS,
  SELECT_FILE
} from '../constants/actionTypes'

const initialState = {
  files: [],
  dir: null,
  dirFailed: null,
  selecting: false,
}

const files = (
  state: Object = initialState,
  action: Object
) => {
  switch(action.type) {
    case READ_FS_FAIL:
      return {
        ...state,
        dirFailed: action.dir,
      }
    case READ_FS_DISCOVERED:
      return {
        ...state,
        files: action.files.map(info => ({
          checked: false,
          info
        })),
        dir: action.dir,
      }
    case TOGGLE_SELECT:
      return {
        ...state,
        selecting: !state.selecting,
      }
    case SELECT_FILE:
      if (state.files[action.index] != null) {
        const toUpdate = state.files[action.index]
        const updated = {
          ...toUpdate,
          checked: !toUpdate.checked
        }
        return {
          ...state,
          files: [
            ...state.files.slice(0, action.index),
            updated,
            ...state.files.slice(action.index + 1)
          ]
        }
      } else {
        return state
      }
    case IMPORT_SONGS_SUCCESS:
      return {
        ...state,
        importSongSuccess: true,
      }
    default:
      return state
  }
}

export default files
