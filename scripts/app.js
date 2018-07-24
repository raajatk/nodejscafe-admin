var app = angular.module("nodejscafe-admin",['ngResource','ngSanitize']);

app.controller("appCtrl", ["$scope","CommonService","$http",function ($scope,CommonService,$http) {
  console.log("THE MAIN CONTROLLER CALLED.");
      $scope.data="HOLA";
      $scope.resData = "<p>hello this is demo code</p>"
      var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            };

      $(function() { $('#edit').froalaEditor() });

      $(function() {
        $('div#froala-editor')
          .on('froalaEditor.contentChanged froalaEditor.initialized', function (e, editor) {
            // $('pre#eg-previewer').text(editor.codeBeautifier.run(editor.html.get()))
            // $('pre#eg-previewer').removeClass('prettyprinted');
            // prettyPrint()
            $scope.data=editor.codeBeautifier.run(editor.html.get());
          })
          .froalaEditor()
      });


      $scope.onSubmit = function(){
        console.log("The submitted data is ",$scope.data);
        // $http.get("http://localhost:3000/api/v1.0/nodejscafe/test").then(
        //   function(response){
        //    console.log("The response is ",response);
        // });



        // $http.post("http://localhost:3000/api/v1.0/nodejscafe/post_blog", $.param({he:"is there"}), config).then(
        //   function(response){
        //     console.log("The response is ",response);
        // });

        $http({
          url:"http://localhost:3000/api/v1.0/nodejscafe/post_blog",
          method:"POST",
          data:{blog:$scope.data},//JSON.stringify({blog:$scope.data}),
          headers:{"Content-Type":"application/json"}
        }).then(function(response){
          console.log("the res is ",response.data.object.matter);
          $scope.resData = response.data.object.matter;
        })

        // CommonService.admin.post_blog();
        //
        // CommonService.admin.post_blog().$promise.then(function(response) {
        //   console.log("The response is ",response);
        // });
      }

}]);
