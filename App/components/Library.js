/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The Library Page component
 * @flow
 */

import React, { Component } from 'react'
import stylesheet from '../stylesheet'
import { View, Text } from 'react-native'

class Library extends Component {
  render() {
    return (
      <View style={stylesheet.library}>
        <Text>Coming soon...</Text>
      </View>
    )
  }
}

export default Library
