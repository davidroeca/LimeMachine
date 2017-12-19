/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The action types of the application
 * @flow
 */

// Player action types
export const PLAY_FROM_FS = 'PLAY_FROM_FS'
export const START_PLAYING = 'START_PLAYING'
export const STOP = 'STOP'
export const PAUSE = 'PAUSE'
export const RESUME = 'RESUME'
export const PLAYING_DONE = 'PLAYING_DONE'
export const PLAYER_ERROR = 'PLAYER_ERROR'

// File action types
export const SET_UP_FS_START = 'SET_UP_FS_START'
export const SET_UP_FS_SUCCESS = 'SET_UP_FS_SUCCESS'
export const SET_UP_FS_FAIL = 'SET_UP_FS_FAIL'

export const READ_FS_START = 'READ_FS_START'
export const READ_FS_DISCOVERED = 'READ_FS_DISCOVERED'
export const READ_FS_FAIL = 'READ_FS_FAIL'

export const TOGGLE_SELECT = 'TOGGLE_SELECT'
export const SELECT_FILE = 'SELECT_FILE'
export const SELECT_ALL = 'SELECT_ALL'

export const IMPORT_SONGS_START = 'IMPORT_SONGS_START'
export const IMPORT_SONGS_SUCCESS = 'IMPORT_SONGS_SUCCESS'
export const IMPORT_SONGS_FAIL = 'IMPORT_SONGS_FAIL'

// Library Action types
export const GET_SONG_DATA_START = 'GET_SONG_DATA_START'
export const GET_SONG_DATA_FAIL = 'GET_SONG_DATA_FAIL'
export const GET_SONG_DATA_SUCCESS = 'GET_SONG_DATA_SUCCESS'
