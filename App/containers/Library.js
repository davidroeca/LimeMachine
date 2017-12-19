/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The Library connected component
 * @flow
 */

import { connect } from 'react-redux'
import { getSongsInView } from '../selectors'
import Library from '../components/Library'

const mapStateToProps = (state) => ({
  songs: getSongsInView(state)
})

export default connect(mapStateToProps)(Library)
