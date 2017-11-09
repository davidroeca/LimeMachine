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
import { PLAYLISTS, FILES, LIBRARY } from '../constants/navigation'
import stylesheet from '../stylesheet'
import Files from '../containers/Files'
import Playlists from '../containers/Playlists'
import Library from '../containers/Library'
import TabBarIcon from './TabBarIcon'

const COLOR_MAGENTA = '#E91E63'


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
  [LIBRARY]: {
    screen: Library,
    navigationOptions: {
      tabBarLabel: 'Library',
      tabBarIcon: (<TabBarIcon name='book'/>),
      showIcon: true,
    }
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: COLOR_MAGENTA,
  }
})

class Home extends Component<{}> {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={stylesheet.home}>
        {/* $FlowFixMe */}
        <HomeNavigator />
      </View>
    )
  }
}

export default Home
