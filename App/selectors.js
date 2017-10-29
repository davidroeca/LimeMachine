/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * Selectors to allow for state restructuring with less refactoring.
 * Will grow into subdirectory if app grows
 * @flow
 */

export const getVisibleFiles = state => state.files.files

export const getPlayingState = state => state.player.isPlaying

export const getCurrentSong = state => state.player.currentSong

export const getPlayerError = state => state.player.error
