/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The Library Page component
 * @flow
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import path from 'path-browserify'
import Sound from 'react-native-sound'
import { getSongData } from '../actions/library'
import { playFromFs } from '../actions/player'

import stylesheet from '../stylesheet'

class Library extends Component<{
  songs: [Sound],
  dispatch: (any) => any
}> {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getSongData())
  }
  render() {
    const iconType = 'font-awesome'
    const { songs, dispatch } = this.props
    return (
      <View style={stylesheet.library}>
        <Button
          containerViewStyle={stylesheet.libraryButton}
          icon={{name: 'refresh', type: iconType}}
          onPress={() => dispatch(getSongData())}
        />
        <List containerStyle={stylesheet.libraryList}>
          {
            songs.map((song, index) => {
              return (
                <ListItem
                  hideChevron
                  onPress={() => dispatch(playFromFs(song.filepath))}
                  containerStyle={stylesheet.libraryListItem}
                  key={index}
                  leftIcon={{name: 'music-note'}}
                  title={song.name ? song.name : path.basename(song.filepath)}
                />
              )
            })
          }
        </List>
      </View>
    )
  }
}

export default Library
