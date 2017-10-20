/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The generalized icon for navigation in the app
 * @flow
 */

import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const TabBarIcon = ({
  name,
  color = 'black'
}: {
  name: string,
  color: ?string
}) => (
  <Icon
    size={30}
    name={name}
    color={color}
  />
)

export default TabBarIcon
