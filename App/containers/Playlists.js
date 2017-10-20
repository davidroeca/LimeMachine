/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The Playlist connected component
 * @flow
 */

import { connect } from 'react-redux'
import Playlists from '../components/Playlists'

const mapStateToProps = (state) => ({
  error: state.files.error,
  debugtext: JSON.stringify(state)
}) // Just get dispatch

export default connect(mapStateToProps)(Playlists)
