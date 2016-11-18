angular.module("assessment").directive("petDir", function() {
  return {
    templateUrl: "../views/pet-tmpl.html",
    restrict: "E",
    controller: function($scope, mainService){
      $scope.getPets = mainService.getPets();
    },
    link: function(scope, element, attrs){
      scope.getPets.then(function(res){
        scope.pets = res.data;
        console.log(scope.pets);
      })
    }
  }
})
