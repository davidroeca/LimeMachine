/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The player reducer
 * @flow
 */

import {
  PLAY_FROM_FS,
  START_PLAYING,
  STOP,
  PAUSE,
  RESUME,
  PLAYING_DONE,
  PLAYER_ERROR,
} from '../constants/actionTypes'

const initialState = {
  error: null,
  isPlaying: false,
  currentSong: null,
}

const player = (state = initialState, action) => {
  switch(action.type) {
    case START_PLAYING:
      return {
        ...state,
        currentSong: action.song,
        isPlaying: true,
      }
    case PLAYING_DONE:
      return {
        ...state,
        isPlaying: false,
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

export default player
