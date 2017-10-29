/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The main component for managing Playlists
 * @flow
 */

import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import stylesheet from '../stylesheet'
import { stop } from '../actions/files'

const Playlists = ({ error, debugtext, dispatch }) => (
  <View style={stylesheet.container}>
    <Button
      raised
      icon={{name: 'home', size: 32}}
      buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
      textStyle={{textAlign: 'center'}}
      title='Stop'
      onPress={() => dispatch(stop())}
    />
    <Text>{error ? error : ''}</Text>
    <Text>{debugtext}</Text>
  </View>
)

export default Playlists
