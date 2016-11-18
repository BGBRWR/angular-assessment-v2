angular.module("assessment").service("mainService", function($http) {
    this.getPets = function() {
        return $http({
          method: "GET",
          url: "http://practiceapi.devmounta.in/pets"
        });
    };
    this.getBio = function(id) {
        return $http({
            method: "GET",
            url: "http://practiceapi.devmounta.in/pets/" + id
        });
    };
});
