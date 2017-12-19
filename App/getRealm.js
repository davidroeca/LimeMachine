/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * Export a function that opens realm with the promise API
 * @flow
 */
import Realm from 'realm'
import {
  REALM_SONG,
  REALM_PLAYLIST,
  REALM_ARTIST,
  REALM_ALBUM,
  REALM_GENRE,
} from './constants/realm'

export const SongSchema = {
  name: REALM_SONG,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
    },
    extension: {
      type: 'string',
    },
    filepath: {
      type: 'string',
    },
    name: {
      type: 'string',
      indexed: true,
      optional: true,
    },
    artist: {
      type: REALM_ARTIST,
      optional: true,
    },
    albumArtist: {
      type: REALM_ARTIST,
      optional: true,
    },
    album: {
      type: REALM_ALBUM,
      optional: true,
    },
    genre: {
      type: REALM_GENRE,
      optional: true,
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
  name: REALM_ALBUM,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
      indexed: true,
    },
    songs: {
      type: 'linkingObjects',
      objectType: REALM_SONG,
      property: 'album',
    },
  }
}

export const ArtistSchema = {
  name: REALM_ARTIST,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
      indexed: true,
    },
    songs: {
      type: 'linkingObjects',
      objectType: REALM_SONG,
      property: 'artist',
    },
  }
}

export const GenreSchema = {
  name: REALM_GENRE,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
      indexed: true,
    }
  }
}

export const PlaylistSchema = {
  name: REALM_PLAYLIST,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string'
    },
    songs: {
      type: 'list',
      objectType: REALM_SONG
    },
  }
}

export default getRealm = () => Realm.open({
  schema: [
    SongSchema,
    AlbumSchema,
    ArtistSchema,
    GenreSchema,
    PlaylistSchema,
  ]
})
