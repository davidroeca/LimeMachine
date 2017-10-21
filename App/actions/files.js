/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The actions related to files
 * @flow
 */
import RNFS from 'react-native-fs'
import path from 'path-browserify'
import { FILES_DIRPATH } from '../constants/files'
import {
  READ_FS_START,
  READ_FS_DISCOVERED,
  READ_FS_FAIL,
  SET_UP_FS_START,
  SET_UP_FS_SUCCESS,
  SET_UP_FS_FAIL
} from '../constants/actionTypes'

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

export const setupFs = () => dispatch => {
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

export const readFs = (dir: string) => dispatch => {
  dispatch(readFsStart(dir))

  const test_files = [
    'test1',
    'test2',
    'test 3',
  ]
  const dirpath = path.join(FILES_DIRPATH, dir)
  return Promise.all(test_files.map(
    file => RNFS.writeFile(path.join(dirpath, file), '')
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
