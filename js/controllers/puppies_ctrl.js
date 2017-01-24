PuppiesAPI.controller('PuppiesCtrl', ['$scope', 'puppies', 'breeds',
  function($scope, puppies, breeds) {
    $scope.puppies = [];
    $scope.breeds = [];

    puppies.sendGetRequest().then(function(response) {
      console.log(response.data); 
      angular.copy(response.data, $scope.puppies);
    });

     breeds.sendGetRequest().then(function(response) {
      angular.copy(response.data, $scope.breeds);
    });
  }
]);
