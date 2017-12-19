/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The AppNavigator app component
 * @flow
 */

import React, { Component } from 'react'
// $FlowFixMe
import { StackNavigator } from 'react-navigation'
import Home from './Home'
import Player from '../containers/Player'
import { HOME, PLAYER } from '../constants/navigation'

const AppNavigator = StackNavigator({
  [HOME]: { screen: Home },
  [PLAYER]: { screen: Player },
})

export default AppNavigator
