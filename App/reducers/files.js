/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The files reducer
 * @flow
 */

import {
  PLAY_FROM_FS,
  START_PLAYING,
  STOP,
  PAUSE,
  RESUME,
  READ_FS_DISCOVERED,
  READ_FS_FAIL,
  PLAYER_ERROR,
} from '../constants/actionTypes'

const initialState = {
  isPlaying: false,
  currentSong: null,
  error: null,
  items: [],
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
    case START_PLAYING:
      return {
        ...state,
        currentSong: action.song,
        isPlaying: true
      }
    case PAUSE:
      return {
        ...state,
        isPlaying: false,
      }
    case RESUME:
      return {
        ...state,
        isPlaying: true,
      }
    case STOP:
      return {
        ...state,
        isPlaying: false,
        currentSong: null
      }
    case PLAYER_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default files
