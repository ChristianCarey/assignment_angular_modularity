PuppiesAPI.controller('PuppiesCtrl', ['$scope', 'puppies',
  function($scope, puppies) {
    $scope.puppies = [];

    puppies.sendGetRequest().then(function(response) {
      console.log(response); 
      angular.copy(response.data, $scope.puppies);
    });
  }
]);
