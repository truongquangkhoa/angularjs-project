'use strict';

app.controller('HomeController',['$scope','$route',function($scope,$route){
	// $scope.template = $route.current.templateUrl;
	 $scope.template = $route.current.templateUrl;
	// alert(222);
}]);

app.controller('AboutController',['$scope','$route',function($scope,$route){
	// $scope.template = $route.current.templateUrl;
	 $scope.template = $route.current.templateUrl;
	// alert(222);
}]);

app.controller('ContactController',['$scope','$route',function($scope,$route){
	// $scope.template = $route.current.templateUrl;
	 $scope.template = $route.current.templateUrl;
	// alert(222);
}]);
app.controller('ServiceController',['$scope',function($scope,calculator){
	$scope.doSquare = function(){
		$scope.answer=$scope.number*$scope.number;	
    }
    $scope.doCube = function(){
    	// $scope.answer = calculator.square($scope.number);
    	$scope.answer=$scope.number*$scope.number*$scope.number;
    }

}]);
