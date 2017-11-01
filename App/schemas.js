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
export const SongSchema = {
  name: SONG,
  properties: {
    name: {
      type: 'string',
    },
    filetype: {
      type: 'string',
    },
    filepath: {
      type: 'string',
    },
    artist: {
      type: ARTIST,
    },
    albumArtist: {
      type: ARTIST,
    }
    album: {
      type: ALBUM,
    },
    genre: {
      type: GENRE,
    },
    track: {
      type: 'int',
      optional: true,
    },
    disk: {
      type: 'int',
      optional: true,
    },
    playCount: {
      type: 'int',
      default: 0,
    }
  }
}

export const AlbumSchema = {
  name: ALBUM,
  properties: {
    name: {
      type: 'string'
    }
    songs: {
      type: 'linkingObject',
      objectType: SONG,
      property: 'album',
    }
    artists: {
      type: 'linkingObject',
      objectType: SONG,
      property: 'albumArtist',
    }
  }
}

export const ArtistSchema = {
  name: ARTIST,
  properties: {
    name: {
      type: 'string'
    },
    songs: {
      type: 'linkingObject',
      objectType: SONG,
      property: 'artist',
    },
    albums: {
      type: 'linkingObject',
      objectType: SONG,
      property: 'album',
    },
  }
}

export const GenreSchema = {
  name: GENRE,
  properties: {
    name: 'string',
  }
}

export const PlaylistSchema = {
  name: PLAYLIST,
  properties: {
    name: {
      type: 'string'
    },
    songs: {
      type: 'list',
      objectType: SONG
    },
  }
}
