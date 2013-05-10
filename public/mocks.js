var pingpongMock = angular.module("pingpongMock");

pingpongMock.service("PlayersService", ["$resource", function($resource) {

    var playersService = {

      all: function(callback) {

        data = [{"workresource":{"unixName":"stefania","links":[{"link":{"rel":"ref","href":"/zauber/people/stefania/"}}]}},
        {"workresource":{"unixName":"ignacioiacobacci","links":[{"link":{"rel":"ref","href":"/zauber/people/ignacioiacobacci/"}}]}}];

        var players = [];
        _.each(data, function(item){
          players.push(item.workresource.unixName);
        })
        callback(players);
      }

    }
    return playersService;
}]);