var pingpong = angular.module("pingpong");

function PlayersController($rootScope, $scope, playersService) {
  playersService.all(function(players) {
    $scope.players = players;
  });

  $scope.showModal = function(name) {
    $rootScope.$emit("playerSelected", name);
  };

}

pingpong.controller("PlayersController", ["$rootScope", "$scope", "PlayersService", PlayersController]);