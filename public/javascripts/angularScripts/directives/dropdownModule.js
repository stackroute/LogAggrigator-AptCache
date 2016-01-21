var dropdownModule=angular.module("dropdownModule",[]);

dropdownModule.directive('dropdownMonth',function(){
  return {
    restrict:'E',
    templateUrl:'html/directives/dropdownMonth.html'
  }
});

dropdownModule.directive('dropdownYear', function(){
  return {
    restrict: 'E',
    templateUrl:'html/directives/dropdownYear.html'
  };
});

dropdownModule.directive('dropdownMode', function(){
  return {
    restrict: 'E',
    templateUrl:'html/directives/dropdownMode.html'
  };
});