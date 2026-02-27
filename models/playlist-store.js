'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const playlistStore = {
    store: new JsonStore('./models/playlist-store.json', { playlistCollection: [] }),
    collection: 'playlistCollection',
    array: 'songs',

    getAllPlaylists() {
        return this.store.findAll(this.collection);
    },

    getPlaylist(id) {
        //logger.debug(this.store.findAll(this.collection).data[this.collection].filter((playlist => playlist.id === id)));
        //logger.debug(this.getAllPlaylists());
        return this.store.findOneBy(this.collection, (playlist => playlist.id === id));
    },

};

export default playlistStore;