angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};

  $scope.signout = function(){
    Auth.signout();
  };

  $scope.authenticate = Auth.isAuth();

  $scope.redirectToShorten = function(){
    window.location = '#/shorten';
  };

  $scope.getLinks = function(){
    //TODO: figure out user param on getlinks
    Links.getlinks()
      .then(function(links){
        $scope.data['links'] = links;
      });
  };

  $scope.getLinks();

});

