'use strict';
angular
  .module('nodejscafe-admin')
  .constant('DEVELOPMENT', {
    environment: "development",
    googleApiKey: 'AIzaSyDYWcNaGUil_d5At6aT75Lre2QeQWrAQjs',
    googleClientId: '1113769060-kbi1fihorh3vvlsnkigon4oahh6p217o.apps.googleusercontent.com',
    organizerUrl: 'http://localhost:9009/organizer/',
    fileDownLoadUrl: 'http://localhost:8590/',
    DEBUG: true

  }).constant('PRODUCTION', {
    environment: "production",
    googleApiKey: 'AIzaSyDPyMKGRWenY_Y1EyPlskviSxLox3GBYr0',
    googleClientId: '690109993201-k2pgoev7t9mvsi7p2h4grqtplc636is2.apps.googleusercontent.com',
    organizerUrl: 'http://www.125fortime.com/organizer/',
    fileDownLoadUrl: 'http://www.125fortime.com:91/',
    DEBUG: false
  }).constant('STAGING', {
    environment: "staging",
    googleApiKey: 'AIzaSyDYWcNaGUil_d5At6aT75Lre2QeQWrAQjs',
    googleClientId: '1113769060-kbi1fihorh3vvlsnkigon4oahh6p217o.apps.googleusercontent.com',
    organizerUrl: 'http://ec2-35-164-242-103.us-west-2.compute.amazonaws.com/organizer/',
    fileDownLoadUrl: 'http://ec2-35-164-242-103.us-west-2.compute.amazonaws.com:91/',
    DEBUG: true
  })
