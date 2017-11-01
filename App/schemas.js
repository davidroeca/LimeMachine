/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * Database schemas, part of realm database
 * @flow
 */

/**********************************************************
 * Constants used within this file
 **********************************************************/
const SONG = 'Song'
const PLAYLIST = 'Playlist'
const ARTIST = 'Artist'
const ALBUM = 'Album'
const GENRE = 'Genre'

/**********************************************************
 * Exported schemas; use their 'name' prop externally
 **********************************************************/

export const ArtistSchema = {
  name: ARTIST,
  properties: {
    name: 'string',
    songs: {
      type: 'list',
      objectType: SONG,
      default: []
    },
    albums: {
      type: 'list',
      objectType: ALBUM,
      default: [],
    },
  }
}

export const AlbumSchema = {
  name: ALBUM,
  properties: {
    name: 'string'
  }
}

export const GenreSchema = {
  name: GENRE,
  properties: {
    name: 'string',
  }
}

export const SongSchema = {
  name: SONG,
  properties: {
    filetype: 'string',
    filepath: 'string',
    artist: {
      type: 'linkingObjects',
      objectType: ARTIST,
      property: 'songs'
    },
    genre: {
      type: 'list',
      objectType: GENRE,
    }
  }
}

export const PlaylistSchema = {
  name: PLAYLIST,
  properties: {
    name: { type: 'string' },
    songs: { type: 'list', objectType: SONG },
  }
}
