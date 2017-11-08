/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The Files Page component
 * @flow
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Badge, CheckBox, List, ListItem } from 'react-native-elements'
import {
  setupFs,
  readFs,
  toggleSelect,
  selectFile,
  importSongs
} from '../actions/files'
import { playFromFs } from '../actions/player'
import stylesheet from '../stylesheet'

class Files extends Component<{
  files: Array<Object>,
  selecting: bool,
  dispatch: () => any
}> {

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(setupFs()).then(() => dispatch(readFs('')))
  }

  render() {
    const { files = [], dispatch, selecting } = this.props
    return (
      <View style={stylesheet.filesContainer}>
        <View style={stylesheet.badgesTop}>
          <Badge value="Select" onPress={() => dispatch(toggleSelect())} />
          {
            selecting ?
              <Badge
                value="Import"
                onPress={() => dispatch(importSongs())}
              /> :
              null
          }
        </View>
        <List containerStyle={stylesheet.filesList}>
          {
            files.map((file, index) => {
              const onPress = selecting ?
                () => dispatch(selectFile(index)) :
                () => dispatch(playFromFs(file.info.path))
              const leftIcon = selecting ? (
                <CheckBox
                  checked={file.checked}
                  onIconPress={() => dispatch(selectFile(index))}
                />
              ) : {
                name: file.info.isDirectory() ? 'folder' : 'music-note'
              }
              return (
                <ListItem
                  hideChevron
                  onPress={onPress}
                  containerStyle={stylesheet.filesListItem}
                  key={index}
                  leftIcon={leftIcon}
                  title={file.info.name}
                />
              )
            })
          }
        </List>
      </View>
    )
  }
}

export default Files
