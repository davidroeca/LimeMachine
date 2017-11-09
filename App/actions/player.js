/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The actions related to playback
 * @flow
 */
import RNFS from 'react-native-fs'
import path from 'path-browserify'
import Sound from 'react-native-sound'
// $FlowFixMe
import { NavigationActions } from 'react-navigation'
import { getCurrentSong } from '../selectors'
import { PLAYER } from '../constants/navigation'
import {
  PLAY_FROM_FS,
  START_PLAYING,
  STOP,
  RESUME,
  PAUSE,
  PLAYING_DONE,
  PLAYER_ERROR
} from '../constants/actionTypes'

export const playerError = (error: string) => ({
  type: PLAYER_ERROR,
  error
})

const playFromFsInternal = (filepath: string) => ({
  type: PLAY_FROM_FS,
  filepath,
})

const startPlaying = (song: Sound) => ({
  type: START_PLAYING,
  song
})

const playingDone = () => ({
  type: PLAYING_DONE
})

export const playFromFs = (filepath: string) => (
  dispatch: (any) => any,
  getState: () => Object
) => {
  dispatch(playFromFsInternal(filepath))

  const state = getState()
  const oldSong = getCurrentSong(state)
  if (oldSong) {
    oldSong.release()
  }
  new Promise((resolve, reject) => {
    const sound = new Sound(filepath, '', (error) => {
      if (error) {
        reject(error)
      }
      resolve(sound)
    })
    return
  })
    .then(song => {
      song.play((success) => {
        if (!success) {
          throw new Error("Song didn't play")
        }
        dispatch(playingDone())
      })
      dispatch(startPlaying(song))
      dispatch(NavigationActions.navigate({
        routeName: PLAYER,
        params: {},
      }))
    })
    .catch((error) => {
      dispatch(playerError('Error occurred in loading'))
    })
}

const stopInternal = () => ({
  type: STOP
})

export const stop = () => (
    dispatch: (any) => any,
    getState: () => Object
) => {
  const state = getState()
  const oldSong = getCurrentSong(state)
  if (oldSong) {
    oldSong.release()
  }
  dispatch(stopInternal())
}

const internalPause = () => ({
  type: PAUSE
})

export const pause = () => (
  dispatch: (any) => any,
  getState: () => Object
) => {
  const state = getState()
  const song = getCurrentSong(state)
  if (song) {
    song.pause(() => {
      dispatch(internalPause())
    })
  }
}

const internalResume = () => ({
  type: RESUME
})

export const resume = () => (
  dispatch: (any) => any,
  getState: () => Object
) => {
  const state = getState()
  const song = getCurrentSong(state)
  if (song) {
    song.play((success) => {
      if (!success) {
        dispatch(playerError('Song playback failed'))
      }
      dispatch(playingDone())
    })
    dispatch(internalResume())
  }
}
