var pingpong = angular.module('pingpong');

pingpong.directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true, //missing trans
      controller: function($scope, $element) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      },
      template: function(){/*
       <div>
       <div id="tab" class="tabbable">
        <ul class="nav nav-tabs">
          <li ng-repeat="pane in panes" ng-class="{active:pane.selected}">
            <a href="" ng-click="select(pane)">{{pane.title}}</a>
          </li>
        </ul>
        <div class="tab-content" ng-transclude></div>
      </div>
       */
     }.toString().slice(14,-3),
        replace: true
    }});

pingpong.directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      templateUrl: "_pane_template.html",
      replace: true
    }
});