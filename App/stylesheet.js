/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The stylesheet for the app
 * @flow
 */

import { StyleSheet } from 'react-native'

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  filesContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 2,
  },
  filesList: {
    width: '100%',
  },
  filesListItem: {
    width: '100%',
  },
  playerContainer: {
    flex: 1,
    //flexDirection: 'row',
  },
  playerArt: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
  },
  playerButtons: {
    flex: 1,
    flexDirection: 'row'
  },
  playerButton: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
})

export default stylesheet
