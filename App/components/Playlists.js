/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The main component for managing Playlists
 * @flow
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import stylesheet from '../stylesheet'
import { stop } from '../actions/player'

class Playlists extends Component<{
  error: string,
  debugtext: string,
  dispatch: (any) => any
}> {
  render() {
    const { error, debugtext, dispatch } = this.props
    return (
      <View style={stylesheet.container}>
        <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={stylesheet.playlistButton}
          textStyle={stylesheet.playlistText}
          title='Stop'
          onPress={() => dispatch(stop())}
        />
        <Text>{error ? error : ''}</Text>
        <Text>{debugtext}</Text>
      </View>
    )
  }
}

export default Playlists
