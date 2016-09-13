angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};

  $scope.signout = function(){
    Auth.signout();
  };

  $scope.redirectToLinks = function(){
    window.location = '#/links';
  };

  //TODO: make this actually shorten the link
  $scope.addLink = function(url){
    console.log('attempting to shorten a link from shorten.js');
    console.log(url, typeof url);
    Links.addlink(url)
      .then(function(link){
        console.log('adding link from shorten.js');
        $scope.link['link'] = link;
      });
  };

});
