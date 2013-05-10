describe('Players list', function() {
  var $scope;
  var service;
  beforeEach(function() {
    module('pingpong');
    module('pingpongMock');

    template = angular.element('<tabs></tabs>');

    inject(function($injector, $controller, $rootScope, $compile) {
      service = $injector.get('PlayersService');
      $scope = $rootScope.$new();
      $compile(template)($scope);
      controller = $controller("PlayersController", {$scope: $scope, PlayersService: service})
      $scope.$apply();
    });

  });

  it('should list all players', function() {
    expect($scope.players.length).toEqual(2);
  });

  it('should add items in the DOM', function() {
  });
});
