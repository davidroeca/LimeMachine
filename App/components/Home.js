/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The Home app component
 * This component is used to manage basic app interactions
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { PLAYLISTS, FILES } from '../constants/navigation'
import TabBarIcon from './TabBarIcon'
import Files from '../containers/Files'
import Playlists from '../containers/Playlists'

const HomeNavigator = TabNavigator({
  [FILES]: {
    screen: Files,
    navigationOptions: {
      tabBarLabel: 'Files',
      tabBarIcon: (<TabBarIcon name='folder-open'/>),
      showIcon: true,
    }
  },
  [PLAYLISTS]: {
    screen: Playlists,
    navigationOptions: {
      tabBarLabel: 'Playlist',
      tabBarIcon: (<TabBarIcon name='list-alt'/>),
      showIcon: true,
    }
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
})

class Home extends Component<{}> {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <HomeNavigator />
      </View>
    )
  }
}

export default Home
