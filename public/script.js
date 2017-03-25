var app = angular.module("myMod", []);


app.directive('homenavBar', function(){
  return {
    restrict: 'EA',
    templateUrl: 'partials/homenavBar.html',
    replace: false
  };
});

app.directive('navBar', function(){
  return {
    restrict: 'EA',
    templateUrl: 'partials/navBar.html',
    replace: false
  };
});
