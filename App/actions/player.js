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
import { NavigationActions } from 'react-navigation'
import { PLAYER } from '../constants/navigation'
import {
  PLAY_FROM_FS,
  START_PLAYING,
  STOP,
  RESUME,
  PAUSE,
  PLAYER_ERROR
} from '../constants/actionTypes'

export const playerError = (error) => ({
  type: PLAYER_ERROR,
  error
})

const playFromFsInternal = (filepath) => ({
  type: PLAY_FROM_FS,
  filepath,
})

const startPlaying = (song) => ({
  type: START_PLAYING,
  song
})

export const playFromFs = (filepath) => {
  return (dispatch, getState) => {
    dispatch(playFromFsInternal(filepath))

    const state = getState()
    const oldSong = state.files.currentSong
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
}

const stopInternal = () => ({
  type: STOP
})

export const stop = () => {
  return (dispatch, getState) => {
    const state = getState()
    const oldSong = state.files.currentSong
    if (oldSong) {
      oldSong.release()
    }
    dispatch(stopInternal())
  }
}

const internalPause = () => ({
  type: PAUSE
})

export const pause = () => (dispatch, getState) => {
  const state = getState()
  const song = state.files.currentSong
  if (song) {
    song.pause(() => {
      dispatch(internalPause())
    })
  }
}

const internalResume = () => ({
  type: RESUME
})

export const resume = () => (dispatch, getState) => {
  const state = getState()
  const song = state.files.currentSong
  if (song) {
    song.play((success) => {
      if (!success) {
        dispatch(playerError('Song playback failed'))
      }
    })
    dispatch(internalResume())
  }
}
