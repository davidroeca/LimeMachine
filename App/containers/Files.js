/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The Files connected component
 * @flow
 */

import { connect } from 'react-redux'
import {
  getVisibleFiles,
  getFilesSelecting
} from '../selectors'
import Files from '../components/Files'

const mapStateToProps = (state) => ({
  files: getVisibleFiles(state),
  selecting: getFilesSelecting(state),
})

export default connect(mapStateToProps)(Files)
