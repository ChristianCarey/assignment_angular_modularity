PuppiesAPI.controller('BreedsCtrl', ['$scope', 'breeds',
  function($scope, breeds) {
    $scope.breeds = [];

    breeds.sendGetRequest().then(function(response) {
      angular.copy(response.data, $scope.breeds);
    });
  }
]);
