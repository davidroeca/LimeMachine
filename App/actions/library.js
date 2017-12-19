/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The actions related to the library interface
 * @flow
 */

import Realm from 'realm'
import getRealm from '../getRealm'
import {
  GET_SONG_DATA_START,
  GET_SONG_DATA_FAIL,
  GET_SONG_DATA_SUCCESS
} from '../constants/actionTypes'
import { REALM_SONG } from '../constants/realm'

const getSongDataStart = () => ({
  type: GET_SONG_DATA_START,
})

const getSongDataFail = () => ({
  type: GET_SONG_DATA_FAIL,
})

const getSongDataSuccess = (songs) => ({
  type: GET_SONG_DATA_SUCCESS,
  songs,
})

export const getSongData = () => (
  dispatch: (any) => any
) => {
  dispatch(getSongDataStart())
  getRealm()
    .then(realm => {
      const songs = realm.objects(REALM_SONG).slice(0, 100)
      dispatch(getSongDataSuccess(songs))
    })
    .catch((error) => {
      dispatch(getSongDataFail())
    })
}
