'use strict';

import logger from '../utils/logger.js';
import aboutStore from '../models/about-store.js';

const about = {
    createView(request, response) {
        logger.info("About page loading");
        
        const viewData ={
            title: "About the Playlist App",
            info: aboutStore.getAppInfo()
        };

        response.render('about', viewData);
    }
};

export default about;