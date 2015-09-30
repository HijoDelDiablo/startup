app.controller('indexcontroller', ['$scope', function($scope){
	$scope.title = 'My Favourite Movies';
    $scope.movies = [
  	{ 
    	name: 'V for Vendetta',
  	},

  	{ 
    	name: 'Battle For Sevastopol', 
  	},

  	{
  		name: 'Tears Of The Sun',
  	},

  	{
  		name: 'Hero',
  	},

  	];

    /*Details*/
    $scope.details = [
    { 
      director: 'Director: James McTeigue',
      year: 'Year: 2005',
      genre: 'Genre: SciFi',
      duration: 'Duration: 132 min',
      /*Main Characters: 'Natalie Portman, Hugo Weaving',*/
    },

    { 
      director: 'Director: Serhiy Mokrytsky',
      year: 'Year: 2015',
      genre: 'Genre: Belic',
      duration: 'Duration: 110 min',
      /*Main Characters: 'Yulia Pereslid, Joan Blackham, Yevheniy Tsyganov',*/
    },

    { 
      director: 'Director: Antoine Fuqua',
      year: 'Year: 2003',
      genre: 'Genre: Action/Belic',
      duration: 'Duration: 145 min',
      /*Main Characters: 'Bruce Willis, Monica Belucci',*/
    },

    { 
      director: 'Director: Zhang Yimou',
      year: 'Year: 2002',
      genre: 'Genre: Action/Drama',
      duration: 'Duration: 99 min',
      /*Main Characters: 'Jet Li, Zhang Ziyi, Tony Leung Chiu Wai, Donnie Yen',*/
    },

    ];

    $scope.visibleD = false;
    /*$scope.viewD = function(){
      $scope.visibleD = true;
      console.log($scope.visibleD);
    }*/
    $scope.viewD = function(){
      if ($scope.visibleD == false) {
        $scope.visibleD = true;
        console.log($scope.visibleD)
      } 
      else{
        $scope.visibleD = false;
        console.log($scope.visibleD)
      };
    }
}]);

