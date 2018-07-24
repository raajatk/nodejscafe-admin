var app = angular.module("nodejscafe-admin");
app.factory("CommonService", ["$resource",function ($resource) {
  var admin = $resource('localhost:3000/api/v1.0', {},{
                 post_blog:{
                     url:"localhost:3000/api/v1.0/nodejscafe/test",
                     method:"GET",
                     headers:{'Content-Type':'application/json'}
                 }
               });

     return {
       admin:admin
     }
   }]);
