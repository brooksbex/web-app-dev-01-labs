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
        //logger.debug(id);
        return this.store.findOneBy(this.collection, (playlist => playlist.id === id));
    },

    addSong(id, song){
        this.store.addItem(this.collection, id, this.array, song);
    },

    editSong(id, songId, updatedSong){
        this.store.editItem(this.collection, id, songId, this.array, updatedSong);
    },

    removeSong(id, songId) {
        this.store.removeItem(this.collection, id, this.array, songId);
    },

    addPlaylist(playlist){
        this.store.addCollection(this.collection, playlist);
    },

    removePlaylist(id){
        this.store.removeCollection(this.collection, this.getPlaylist(id));
    },

    searchPlaylist(search){
        return this.store.findBy(this.collection, (playlist => playlist.title.toLowerCase().includes(search.toLowerCase())))
    },

    getUserPlaylists(userid){
        return this.store.findBy(this.collection, (playlist => playlist.userid===userid));
    },

    searchUserPlaylists(search, userid){
        return this.store.findBy(this.collection, (playlist => playlist.userid === userid && playlist.title.toLowerCase().includes(search.toLowerCase())));
    }

};

export default playlistStore;