/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * The stylesheet for the app
 * @flow
 */

import { StyleSheet } from 'react-native'

const COLOR_RED = '#FF3000'
const COLOR_BLUE_WHITE = '#F5FCFF'
const COLOR_V_LIGHT_GREY = '#F2F2F2'

const stylesheet = StyleSheet.create({
  home: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BLUE_WHITE,
  },
  filesContainer: {
    flex: 1,
    //paddingTop: 2,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  badgesTop: {
    flex: 1,
    flexDirection: 'row',
  },
  filesList: {
    flex: 20,
    width: '100%',
  },
  filesListItem: {
    width: '100%',
  },
  playlistButton: {
    backgroundColor: COLOR_RED,
    borderRadius: 10,
  },
  playlistText: {
    textAlign: 'center'
  },
  playerContainer: {
    flex: 1,
    //flexDirection: 'row',
  },
  playerArt: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR_V_LIGHT_GREY,
    justifyContent: 'center',
  },
  playerButtons: {
    flex: 1,
    flexDirection: 'row'
  },
  playerButton: {
    flex: 1,
  },
  library: {
    flex: 1,
    alignItems: 'center',
  },
  libraryList: {
    flex: 20,
    width: '100%',
  },
  libraryListItem: {
    width: '100%',
  }
})

export default stylesheet
