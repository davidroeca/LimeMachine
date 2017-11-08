/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The library reducer
 * @flow
 */
import {
  GET_SONG_DATA_SUCCESS
} from '../constants/actionTypes'

const initialState = {
  songs: []
}

const library = (state = initialState, action) => {
  switch(action.type) {
    case GET_SONG_DATA_SUCCESS:
      return {
        ...state,
        songs: action.songs,
      }
    default:
      return state
  }
}

export default library
