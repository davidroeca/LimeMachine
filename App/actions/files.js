/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The actions related to files
 * @flow
 */
import uuid from 'uuid'
import RNFS from 'react-native-fs'
import path from 'path-browserify'
import { FILES_DIRPATH } from '../constants/files'
import {
  READ_FS_START,
  READ_FS_DISCOVERED,
  READ_FS_FAIL,
  SET_UP_FS_START,
  SET_UP_FS_SUCCESS,
  SET_UP_FS_FAIL,
  TOGGLE_SELECT,
  SELECT_FILE,
  SELECT_ALL,
  IMPORT_SONGS_START,
  IMPORT_SONGS_SUCCESS,
  IMPORT_SONGS_FAIL
} from '../constants/actionTypes'
import getRealm from '../getRealm'
import { getSelectedFiles } from '../selectors'
import { REALM_SONG } from '../constants/realm'

// dir in this whole module is relative to documents dir
const setupFsStart = () => ({
  type: SET_UP_FS_START,
})

const setupFsSuccess = () => ({
  type: SET_UP_FS_SUCCESS,
})

const setupFsFail = () => ({
  type: SET_UP_FS_FAIL,
})

export const setupFs = () => (dispatch: (any) => any) => {
  dispatch(setupFsStart())
  return RNFS.mkdir(FILES_DIRPATH)
    .then(() => dispatch(setupFsSuccess()))
    .catch(() => dispatch(setupFsFail()))
}

const readFsStart = (dir) => ({
  type: READ_FS_START,
  dir
})

const readFsFail = (dir) => ({
  type: READ_FS_FAIL,
  dir,
})

const readFsDiscovered = (dir: string, files: Array<Object>) => ({
  type: READ_FS_DISCOVERED,
  dir,
  files,
})

export const readFs = (dir: string) => (dispatch: (any) => any) => {
  dispatch(readFsStart(dir))

  const test_mp3_urls = [
    {
      url: 'http://soundjig.com/pages/soundfx/beeps.php?mp3=beep1.mp3',
      name: 'beep1.mp3',
    },
    {
      url: 'http://soundjig.com/pages/soundfx/beeps.php?mp3=beep9.mp3',
      name: 'beep9.mp3',
    },
    {
      url: 'http://soundjig.com/pages/soundfx/beeps.php?mp3=beep16.mp3',
      name: 'beep16.mp3',
    }
  ]
  const dirpath = path.join(FILES_DIRPATH, dir)
  Promise.all(test_mp3_urls.map(
    ({url, name}) => RNFS.downloadFile({
      fromUrl: url,
      toFile: path.join(dirpath, name)
    }).promise // object also returned with jobId in case of cancels
    .then(downloadResult => {
      if (downloadResult.statusCode !== 200) {
        throw new Error('Non-200 status code for file download')
      }
    })
  ))
    .then(
      () => RNFS.readDir(dirpath)
    )
  // below is where to actually start
  //return RNFS.readDir(dirpath)
    .then(
      files => {
        dispatch(readFsDiscovered(dir, files))
      }
    )
    .catch(() => dispatch(readFsFail(dir)))
}

export const toggleSelect = () => ({
  type: TOGGLE_SELECT,
})

export const selectFile = (index: number) => ({
  type: SELECT_FILE,
  index,
})

export const selectAll = () => ({
  type: SELECT_ALL,
})

const importSongsStart = () => ({
  type: IMPORT_SONGS_START,
})

const importSongsSuccess = () => ({
  type: IMPORT_SONGS_SUCCESS,
})

const importSongsFail = () => ({
  type: IMPORT_SONGS_FAIL,
})

export const importSongs = () => (
  dispatch: (any) => any,
  getState: () => Object,
) => {
  dispatch(importSongsStart())
  const state = getState()
  const selectedFileInfo = getSelectedFiles(state).map(file => file.info)
  getRealm()
    .then(realm => {
      realm.write(() => {
        for (const info of selectedFileInfo) {
          realm.create(REALM_SONG, {
            id: uuid.v4(),
            extension: path.extname(info.filename),
            filepath: info.path,
          })
        }
      })
      dispatch(importSongsSuccess())
    })
    .catch((error) => dispatch(importSongsFail()))
}
