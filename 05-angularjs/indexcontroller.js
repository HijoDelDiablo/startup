app.controller('indexcontroller', ['$scope', function($scope){
	$scope.title = 'My Favourite Movies';
    $scope.movies = [
  	{ 
    	name: 'V for Vendetta', 
  	},

  	{ 
    	name: 'Madagascar', 
  	},

  	{
  		name: 'Tears Of The Sun',
  	},

  	{
  		name: 'Hero',
  	},

  	]; 
}]);