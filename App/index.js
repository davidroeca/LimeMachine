/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The app's main export
 * @flow
 */

import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App'

// -------------------------------------------
// v Delete these lines when app is stable
import getRealm from './getRealm'
getRealm()
  .then(realm => {
    realm.write(() => {
      if (!realm.empty) {
        realm.deleteAll()
      }
    })
  })
// ^ Delete these lines when app is stable
// -------------------------------------------

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
