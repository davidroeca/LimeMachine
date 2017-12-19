/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The Player component
 * @flow
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button }  from 'react-native-elements'
import stylesheet from '../stylesheet'
import { pause, resume } from '../actions/player'

class Player extends Component<{
  dispatch: (any) => any,
  isPlaying: boolean
}> {
  render() {
    const { dispatch, isPlaying } = this.props
    const iconType = 'font-awesome'
    return (
      <View style={stylesheet.playerContainer}>
        <View style={stylesheet.playerArt} />
        <View style={stylesheet.playerButtons}>
          <Button
            containerViewStyle={stylesheet.playerButton}
            icon={{name: 'backward', type: iconType}}
          />
          <Button
            containerViewStyle={stylesheet.playerButton}
            icon={{name: isPlaying ? 'pause' : 'play', type: iconType}}
            onPress={() => isPlaying ? dispatch(pause()) : dispatch(resume())}
          />
          <Button
            containerViewStyle={stylesheet.playerButton}
            icon={{name: 'forward', type: iconType}}
          />
        </View>
      </View>
    )
  }
}

export default Player
