/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * Constants associated with files
 * @flow
 */

import RNFS from 'react-native-fs'
import path from 'path-browserify'

export const FILES_DIRNAME = 'Files'
export const FILES_DIRPATH = path.join(
  RNFS.DocumentDirectoryPath,
  FILES_DIRNAME
)
