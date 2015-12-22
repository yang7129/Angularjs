function Day12Ctrl($scope) {
	$scope.Templates = [
		{ name: 'Day1.htm', url: 'Day1.htm' },
		{ name: 'Day2.htm', url:  'Day2.htm' }
	];
	$scope.template = $scope.Templates[0];
}