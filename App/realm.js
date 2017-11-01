/**********************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************
 * Export the realm object
 * @flow
 */
import {
  SONG,
  PLAYLIST,
  ARTIST,
  ALBUM,
  GENRE,
} from '../constants/realm'

const SongSchema = {
  name: SONG,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
      indexed: true,
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

const AlbumSchema = {
  name: ALBUM,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
      indexed: true,
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

const ArtistSchema = {
  name: ARTIST,
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

const GenreSchema = {
  name: GENRE,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
    },
    name: 'string',
    indexed: true,
  }
}

const PlaylistSchema = {
  name: PLAYLIST,
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
      objectType: SONG
    },
  }
}

export default new Realm({
  schema: [
    SongSchema,
    AlbumSchema,
    ArtistSchema,
    GenreSchema,
    PlaylistSchema,
  ]
})
