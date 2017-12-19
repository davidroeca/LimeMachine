/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The App
 * @flow
 */

import React, { Component } from 'react'

// $FlowFixMe
import { addNavigationHelpers } from 'react-navigation'
import AppNavigator from './AppNavigator'

class App extends Component<{
  dispatch: (any) => any,
  nav: Object
}> {
  render() {
    const { dispatch, nav } = this.props
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: nav
        })}
      />
    )
  }
}

export default App
