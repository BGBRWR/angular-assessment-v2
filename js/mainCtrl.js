angular.module('assessment').controller('mainCtrl', function($scope, mainService, $stateParams) {

  var id = $stateParams.id;
  $scope.getBio = mainService.getBio(id).then(function(res){
    $scope.pet = res.data;
  });

});
