PuppiesAPI.controller('PuppiesCtrl', ['$scope', 'puppies', 'breeds',
  function($scope, puppies, breeds) {
    $scope.puppies = [];
    $scope.breeds = [];

    var getPuppies = function() {
      puppies.sendGetRequest().then(function(response) {
        angular.copy(response.data, $scope.puppies);
      });
    }

    var getBreeds = function() {
      breeds.sendGetRequest().then(function(response) {
        angular.copy(response.data, $scope.breeds);
      });
    }

    $scope.destroyPuppy = function(id) {
      puppies.sendDeleteRequest(id).then(getPuppies);
    }

    $scope.addPuppy = function(form) {
      if (!form.$valid) {
        return;
      }

      var data = {
        name: $scope.formData.name,
        breed_id: $scope.formData.breedID
      }

      puppies.sendPostRequest(data).then(getPuppies); 
      $scope.formData = {};
      form.$setPristine();
    }

    $scope.orderBy = function(orderOption) {
      if ($scope.orderOption === orderOption) {
        $scope.reverseOption = !$scope.reverseOption;
      } else {
        $scope.reverseOption = false;
        $scope.orderOption = orderOption;
      }
    }

    $scope.arrow = function(orderOption) {
      if ($scope.orderOption === orderOption) {
        return $scope.reverseOption ? " \u2191" : " \u2193"
      }
    }

    getPuppies();
    getBreeds();
  }
]);
