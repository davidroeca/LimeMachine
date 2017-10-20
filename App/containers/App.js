/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The main connected App component
 * @flow
 */
import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => ({
  nav: state.nav
})

export default connect(mapStateToProps)(App)
