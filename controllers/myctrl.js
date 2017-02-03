app.controller('myCtrl', function($scope) {
	// Declares empty array and counter
	$scope.num = 0
	$scope.nums =[]

	// Adds 1 to array and counter everytime button is clicked
	$scope.increment = function() {
		$scope.num++;
	}

	// Breaks the push into array
	$scope.breakit = $scope.$watch('num', function() {
		// Pushes number into array
		$scope.nums.push($scope.num)
	})
});
