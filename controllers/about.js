'use strict';
import logger from "../utils/logger.js";
import empStore from "../models/emp-store.js";
import accounts from "./accounts.js";

const about = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("About page loading!");

    if (loggedInUser) {
      const viewData = {
        title: "Playlist App About",
        fullname: loggedInUser.firstName + " " + loggedInUser.lastName,
        emps: empStore.getEmpInfo()
      };
      
      //logger.info(viewData.emps)
      response.render('about', viewData);
    } else {
      response.redirect('/');
    }
  },
};

export default about;
