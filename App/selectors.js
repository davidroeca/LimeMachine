/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * Selectors to allow for state restructuring with less refactoring.
 * Will grow into subdirectory if app grows
 * @flow
 */


// Files selectors
export const getVisibleFiles = (state: Object) => state.files.files

export const getSelectedFiles = (state: Object) => (
  getVisibleFiles(state).filter(file => file.checked)
)

export const getFilesSelecting = (state: Object) => state.files.selecting

// Player selectors
export const getPlayingState = (state: Object) => state.player.isPlaying

export const getCurrentSong = (state: Object) => state.player.currentSong

export const getPlayerError = (state: Object) => state.player.error

// Library selectors
export const getSongsInView = (state: Object) => state.library.songs
