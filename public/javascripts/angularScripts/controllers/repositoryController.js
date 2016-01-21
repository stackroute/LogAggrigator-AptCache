angular.module('aptLogApp').controller("repositoryController",function($scope,$http,ajaxService){
    $scope.requiredYear = 2015;
    $scope.mode = "Input";
    $scope.tableData = {};


    $scope.writeTable = function(year,mode){
        $scope.requiredYear = year;
        $scope.mode = mode;
          ajaxService.ajaxCall("repository","/"+year+"/"+mode,$http,$scope);
        };
        $scope.initializeVars = function(){
          ajaxService.ajaxCall("getRepoTable",$scope.mode,$http,$scope);

        };

});