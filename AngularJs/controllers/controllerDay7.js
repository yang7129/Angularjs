function Day7Ctrl($scope) {
	$scope.names = ['Lily', 'Lucy', 'Marry', 'John', 'Nana'];
	$scope.items = [
		{ title: '性別', status: '1' },
		{ title: '血型', status: '0' },
		{ title: '生日', status: '1' }
	];

	$scope.checked = function (value) {
		$scope.select = value;
	};
}	
