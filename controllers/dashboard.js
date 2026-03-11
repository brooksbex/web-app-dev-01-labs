'use strict';

import { v4 as uuidv4 } from 'uuid';
import logger from '../utils/logger.js';
import playlistStore from '../models/playlist-store.js';

    const dashboard = {
        createView(request, response) {
            logger.info("Dashboard page loading");
            
            const viewData = {
                title: "Playlist App Dashboard",
                playlists: playlistStore.getAllPlaylists()
            };

            //logger.debug(viewData.playlists);
            response.render('dashboard', viewData);
        },

        addPlaylist(request, response){
            const newPlaylist = {
                id: uuidv4(),
                title: request.body.title,
                songs: [],
            };
            playlistStore.addPlaylist(newPlaylist);
            response.redirect('/dashboard');
        },

        deletePlaylist(request, response){
            const playlistId = request.params.id;
            logger.debug(`Deleting Playlist ${playlistId}`);
            playlistStore.removePlaylist(playlistId);
            response.redirect("/dashboard");
        }
    };

    export default dashboard;