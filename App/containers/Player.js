/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The Player connected component
 * @flow
 */

import { connect } from 'react-redux'
import Player from '../components/Player'

const mapStateToProps = (state) => ({
  isPlaying: state.files.isPlaying
})

export default connect(mapStateToProps)(Player)
