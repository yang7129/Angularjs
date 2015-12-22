function Day17Ctrl($scope,$timeout) {
	//不太會用
	$scope.istrue=0;
	$scope.countDown =10;
	var timer = setInterval(function () {
		$scope.countDown--;
		$scope.$apply();
		console.log($scope.countDown);
	},1000);
	$scope.stop=function(){
		
		if ($scope.istrue === 0 ) {
			window.clearInterval(timer);
			$scope.istrue=1;
		}else{
				window.setInterval(timer);
			$scope.istrue=0;
		}
	};
	//======================================
	//GOOD
	$scope.istrue1=0;
	$scope.countDown1 =0;
	$scope.onTimeout=function(){
		$scope.countDown1++;
		mytimeout = $timeout($scope.onTimeout,1000);
	};
	var mytimeout = $timeout($scope.onTimeout,1000);
	$scope.stop1 =function(){
		if ($scope.istrue1 === 0 ) {
			$timeout.cancel(mytimeout);
			$scope.istrue1=1;
		}else{
			mytimeout = $timeout($scope.onTimeout,1000);
			$scope.istrue1=0;
		}
		
	};
}