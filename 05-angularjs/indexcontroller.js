app.controller('indexcontroller',['$scope',function($scope){
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
  id: 0,
  director: 'Director: James McTeigue',
  year: 'Year: 2005',
  genre: 'Genre: SciFi',
  duration: 'Duration: 132 min',
  /*Main Characters: 'Natalie Portman, Hugo Weaving',*/
},

{ 
  id: 1,
  director: 'Director: Serhiy Mokrytsky',
  year: 'Year: 2015',
  genre: 'Genre: Belic',
  duration: 'Duration: 110 min',
  /*Main Characters: 'Yulia Pereslid, Joan Blackham, Yevheniy Tsyganov',*/
},

{ 
  id: 2,
  director: 'Director: Antoine Fuqua',
  year: 'Year: 2003',
  genre: 'Genre: Action/Belic',
  duration: 'Duration: 145 min',
  /*Main Characters: 'Bruce Willis, Monica Belucci',*/
},

{ 
  id: 3,
  director: 'Director: Zhang Yimou',
  year: 'Year: 2002',
  genre: 'Genre: Action/Drama',
  duration: 'Duration: 99 min',
  /*Main Characters: 'Jet Li, Zhang Ziyi, Tony Leung Chiu Wai, Donnie Yen',*/
},

];

$scope.visibleDetails = false;
$scope.detail = false;
    /*$scope.viewD = function(){
      $scope.visibleD = true;
      console.log($scope.visibleD);
    }*/
    $scope.viewDetails = function(id){
      $scope.visibleDetails = true;
      angular.forEach($scope.details, function(detail){
        if (detail.id == id) {
          $scope.detail = detail;
        };
      })
    }
    }]);

