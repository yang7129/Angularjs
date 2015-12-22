function Day11Ctrl($scope) {
	$scope.confirmed = true;
	$scope.counter = 0;
	$scope.change = function () {
		$scope.counter++;
	};

	$scope.sizes = [
		{ code: 1, name: "n1", counter: 1 },
		{ code: 2, name: "n2", counter: 2 }
	];
	$scope.update = function () {
		angular.forEach($scope.sizes, function (value, key) {
			value.counter = value.counter * 3;
		});
	};
	$scope.item = $scope.sizes[0];
}