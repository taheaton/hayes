import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import AddController from './controllers/add.controller';
import ListController from './controllers/list.controller';
import SingleController from './controllers/single.controller';

import ContactService from './services/contact.service';



angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: "https://api.parse.com/1/",
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'RUI0eVrObvApF6FDocHgEsvLfFkixKB1lVN9bO9k',
        'X-Parse-REST-API-Key': 'TJduuakbFPVCAyNbAFqWyXfBej9oMilyvM0gZWzx'
      }
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .service('ContactService', ContactService)
;
