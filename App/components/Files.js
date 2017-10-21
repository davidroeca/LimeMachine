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
import { Badge, List, ListItem } from 'react-native-elements'
import { setupFs, readFs } from '../actions/files'
import { playFromFs } from '../actions/player'
import stylesheet from '../stylesheet'

class Files extends Component<{files: Array<Object>, dispatch: () => any}> {

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(setupFs()).then(() => dispatch(readFs('')))
  }

  render() {
    const { files = [] } = this.props
    return (
      <View style={stylesheet.filesContainer}>
        <View style={stylesheet.badgesTop}>
          <Badge value="Select" />
          <Badge value="Import" />
        </View>
        <List containerStyle={stylesheet.filesList}>
          {
            files.map((file, key) => (
              <ListItem
                hideChevron
                onPress={() => this.props.dispatch(playFromFs(file.path))}
                containerStyle={stylesheet.filesListItem}
                key={key}
                leftIcon={{
                  name: file.isDirectory() ? 'folder' : 'music-note'
                }}
                title={file.name}
              />
            ))
          }
        </List>
      </View>
    )
  }
}

export default Files
